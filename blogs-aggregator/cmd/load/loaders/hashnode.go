package loaders

import (
	"time"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type HashnodeLoader struct{}

func (ml HashnodeLoader) Load(src []byte) ([]posts.Post, error) {
	time.Sleep(time.Second * 1)
	return nil, nil
}
