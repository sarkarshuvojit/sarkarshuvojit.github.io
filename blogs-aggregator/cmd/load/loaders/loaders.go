package loaders

import (
	"log"
	"sync"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/utils"
)

type Loader interface {
	Parse(src []byte) ([]posts.Post, error)
	Load([]posts.Post) error
}

type LoadConfig struct {
	url    string
	loader Loader
	wg     *sync.WaitGroup
}

func NewLoadConfig(url string, loader Loader, wg *sync.WaitGroup) *LoadConfig {
	return &LoadConfig{
		url:    url,
		loader: loader,
		wg:     wg,
	}
}

func (lc LoadConfig) Load() error {
	log.Printf("Loading URL : %s", lc.url)
	log.Printf("Loading with config: %v", lc)

	content, err := utils.GetRssContent(lc.url)
	if err != nil {
		return err
	}

	lc.loader.Parse(content)

	log.Printf("Loaded URL : %s", lc.url)
	lc.wg.Done()
	return nil
}
