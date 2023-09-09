package loaders

import (
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type MediumLoader struct{}

func (ml MediumLoader) Load(src []byte) ([]posts.Post, error) {

	return nil, nil
}
