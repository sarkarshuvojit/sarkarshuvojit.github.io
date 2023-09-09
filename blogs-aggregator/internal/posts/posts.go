package posts

import (
	"errors"
	"fmt"
	"time"
)

type Post struct {
	ID               string `json:"id"`
	Slug             string `json:"slug"`
	ShortDescription string `json:"shortDescription"`
	OgUrl            string `json:"ogUrl"`
	OgImageUrl       string `json:"ogImageUrl"`

	PublishedAt time.Time `json:"publishedAt"`
}

type PostRepository interface {
	get(id string) (Post, error)
	getAll() ([]Post, error)
}

type PostRepositoryMongo struct{}

func (p PostRepositoryMongo) get(id string) (*Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}

func (p PostRepositoryMongo) getAll() ([]Post, error) {
	return nil, errors.New(fmt.Sprintf("Unimplemented method"))
}
