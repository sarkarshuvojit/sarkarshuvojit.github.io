package posts

import (
	"context"
	"errors"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
)

type Post struct {
	Title            string `bson:"title"`
	Slug             string `bson:"slug"`
	ShortDescription string `bson:"shortDescription"`
	OgUrl            string `bson:"ogUrl"`
	OgImageUrl       string `bson:"ogImageUrl"`

	PublishedAt time.Time `bson:"publishedAt"`
}

type PostRepository interface {
	Get(id string) (Post, error)
	GetAll() ([]Post, error)

	Save(Post) error
	SaveAll([]Post) error
}

type PostRepositoryMongo struct {
	client *mongo.Client
}

func NewPostRepository(client *mongo.Client) *PostRepositoryMongo {
	return &PostRepositoryMongo{
		client: client,
	}
}

// Converts slice of posts to slice of interfaces
// Mongo client seems to only work with slice of interfaces
func (p PostRepositoryMongo) toInterfaceSlice(postslist []Post) []interface{} {
	ret := make([]interface{}, len(postslist))
	for i := range postslist {
		ret[i] = postslist[i]
	}
	return ret
}

func (p PostRepositoryMongo) Get(id string) (*Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}

func (p PostRepositoryMongo) getAll() ([]Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}

func (p PostRepositoryMongo) SaveAll(newPosts []Post) error {
	coll := p.client.Database("sarkarshuvojit_github").Collection("posts")
	results, err := coll.InsertMany(context.TODO(), p.toInterfaceSlice(newPosts))
	if err != nil {
		log.Println("Could not save to db")
		return err
	}

	log.Printf("Created IDs: %v\n", results.InsertedIDs)
	return nil
}

func (p PostRepositoryMongo) Save(newPost Post) error {
	coll := p.client.Database("sarkarshuvojit_github").Collection("posts")
	result, err := coll.InsertOne(context.TODO(), newPost)
	if err != nil {
		log.Println("Could not save item to db")
		return err
	}

	log.Printf("Created ID: %v\n", result.InsertedID)
	return nil
}
