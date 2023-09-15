package main

import (
	"fmt"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

func main() {

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
