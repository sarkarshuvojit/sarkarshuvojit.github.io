package main

import (
	"context"
	"flag"
	"fmt"
	"io"
	"log"
	"os"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/db"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/models/posts"
)

func main() {

	setVerbosity()

	mediumLC := loaders.NewLoadConfig(
		constants.MEDIUM_RSS_URL,
		loaders.MediumLoader{},
	)
	hashnodeLC := loaders.NewLoadConfig(
		constants.HASHNODE_RSS_URL,
		loaders.HashnodeLoader{},
	)

	sources := []*loaders.LoadConfig{
		mediumLC, hashnodeLC,
	}

	postlist := getPosts(sources)
	fmt.Printf("Total posts: %d\n", len(postlist))

	if err := storePosts(postlist); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println("Stored posts!! Bye.")
}

// Parses flags and reads --verbose
// If not found then all log output is sent to io.Discard
func setVerbosity() {
	isVerbose := flag.Bool("v", false, "Enable to view detailed logs")
	flag.Parse()

	if !*isVerbose {
		log.SetOutput(io.Discard)
	}
}

func getPosts(sources []*loaders.LoadConfig) (postlist []posts.Post) {
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

func storePosts(postList []posts.Post) error {
	db, err := db.GetClient(context.TODO(), os.Getenv("MONGO_CONN"))
	if err != nil {
		log.Println("Couldn't connect to mongo")
		return err
	}
	postsRepo := posts.NewPostRepository(db)

	log.Printf("Trying to save %d posts.", len(postList))
	return postsRepo.SaveAll(postList)
}
