package main

import (
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"sync"
	"time"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

func GetRssContent(url string) ([]byte, error) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
	}

	defer res.Body.Close()
	resBody, readErr := io.ReadAll(res.Body)
	if readErr != nil {
		return nil, errors.New(fmt.Sprintf("Unable to fetch content from: %s", url))
	}

	return resBody, nil
}

type Loader interface {
	load(src []byte) ([]posts.Post, error)
}

type MediumLoader struct{}

func (ml MediumLoader) load(src []byte) ([]posts.Post, error) {
	time.Sleep(time.Second * 2)
	return nil, nil
}

type HashnodeLoader struct{}

func (ml HashnodeLoader) load(src []byte) ([]posts.Post, error) {
	time.Sleep(time.Second * 1)
	return nil, nil
}

type LoadConfig struct {
	url    string
	loader Loader
	wg     *sync.WaitGroup
}

func (lc LoadConfig) load() error {
	log.Printf("Loading URL : %s", lc.url)
	log.Printf("Loading with config: %v", lc)

	content, err := GetRssContent(lc.url)
	if err != nil {
		return err
	}

	lc.loader.load(content)

	log.Printf("Loaded URL : %s", lc.url)
	lc.wg.Done()
	return nil
}

func main() {
	var wg sync.WaitGroup
	wg.Add(2)

	mediumLC := &LoadConfig{
		url:    constants.MEDIUM_RSS_URL,
		loader: MediumLoader{},
		wg:     &wg,
	}
	hashnodeLC := &LoadConfig{
		url:    constants.HASHNODE_RSS_URL,
		loader: HashnodeLoader{},
		wg:     &wg,
	}

	sources := []*LoadConfig{
		mediumLC, hashnodeLC,
	}

	for i := range sources {
		source := sources[i]
		go source.load()
	}

	wg.Wait()
	fmt.Println("Done")
}
