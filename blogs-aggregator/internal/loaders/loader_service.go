package loaders

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/db"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/models/posts"
	"go.mongodb.org/mongo-driver/mongo"
)

type LoaderService struct{}

func NewLoaderService() *LoaderService {
	return &LoaderService{}
}

func (l LoaderService) getPosts(sources []*LoadConfig) (postlist []posts.Post) {
	var (
		postsChan = make(chan []posts.Post)
		errChan   = make(chan error)
	)

	for _, source := range sources {
		go source.Load(postsChan, errChan)
	}

	resultsExpected := len(sources)

	for {
		select {
		case err := <-errChan:
			fmt.Printf("Error Happened: %v\n", err)
			return
		case postChunk := <-postsChan:
			fmt.Printf("Found Posts: %d\n", len(postChunk))
			for _, p := range postChunk {
				postlist = append(postlist, p)
			}
			resultsExpected = resultsExpected - 1

			if resultsExpected == 0 {
				return
			}
		}
	}
}

func (l LoaderService) storePosts(postList []posts.Post) error {
	db, err := db.GetClient(context.TODO())
	defer db.Disconnect(context.TODO())

	if err != nil {
		log.Println("Couldn't connect to mongo")
		return err
	}
	postsRepo := posts.NewPostRepository(db)

	log.Printf("Trying to save %d posts.", len(postList))

	newPostsCount := 0

	for _, p := range postList {
		if err := postsRepo.Save(p); err != nil {
			if mongo.IsDuplicateKeyError(err) {
				log.Printf("Already saved %v\n", p)
				continue
			} else {
				return err
			}
		}
		newPostsCount++
	}

	log.Printf("Saved %d/%d posts", newPostsCount, len(postList))
	return nil
}

func (l LoaderService) initSchema() error {
	client, err := db.GetClient(context.TODO(), os.Getenv("MONGO_CONN"))
	defer client.Disconnect(context.TODO())

	if err != nil {
		log.Println("Couldn't connect to mongo")
		return err
	}

	log.Println("Loading schema")
	db.InitSchema(context.TODO(), client)
	return nil
}

func (l LoaderService) Start() error {
	l.initSchema()

	mediumLC := NewLoadConfig(
		constants.MEDIUM_RSS_URL,
		MediumLoader{},
	)
	hashnodeLC := NewLoadConfig(
		constants.HASHNODE_RSS_URL,
		HashnodeLoader{},
	)

	sources := []*LoadConfig{
		mediumLC, hashnodeLC,
	}

	postlist := l.getPosts(sources)
	fmt.Printf("Total posts: %d\n", len(postlist))

	if err := l.storePosts(postlist); err != nil {
		return err
	}

	fmt.Println("Stored posts!! Bye.")
	return nil
}
