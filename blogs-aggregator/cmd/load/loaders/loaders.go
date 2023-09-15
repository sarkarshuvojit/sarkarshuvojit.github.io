package loaders

import (
	"log"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/utils"
)

type Loader interface {
	Parse(src []byte) ([]posts.Post, error)
}

type LoadConfig struct {
	url    string
	loader Loader
}

func NewLoadConfig(url string, loader Loader) *LoadConfig {
	return &LoadConfig{
		url:    url,
		loader: loader,
	}
}

func (lc LoadConfig) Load(postsChan chan []posts.Post, errChan chan error) {
	log.Printf("Loading URL : %s", lc.url)
	log.Printf("Loading with config: %v", lc)

	content, err := utils.GetRssContent(lc.url)
	if err != nil {
		errChan <- err
		return
	}

	postlist, err := lc.loader.Parse(content)
	if err != nil {
		errChan <- err
	}

	log.Printf("Loaded URL : %s", lc.url)
	postsChan <- postlist
}
