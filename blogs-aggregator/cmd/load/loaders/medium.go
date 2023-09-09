package loaders

import (
	"time"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type MediumLoader struct{}

func (ml MediumLoader) load(src []byte) ([]posts.Post, error) {
	time.Sleep(time.Second * 2)
	return nil, nil
}
