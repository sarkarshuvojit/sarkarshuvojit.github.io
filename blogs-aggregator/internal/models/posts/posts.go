package posts

import (
	"errors"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
)

type Post struct {
	ID               string `json:"id"`
	Title            string `json:"title"`
	Slug             string `json:"slug"`
	ShortDescription string `json:"shortDescription"`
	OgUrl            string `json:"ogUrl"`
	OgImageUrl       string `json:"ogImageUrl"`

	PublishedAt time.Time `json:"publishedAt"`
}

type PostRepository interface {
	Get(id string) (Post, error)
	GetAll() ([]Post, error)

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

func (p PostRepositoryMongo) Get(id string) (*Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}

func (p PostRepositoryMongo) getAll() ([]Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}

func (p PostRepositoryMongo) SaveAll(newPosts []Post) error {
	return errors.New(fmt.Sprintf("Unimplemented method"))
}
