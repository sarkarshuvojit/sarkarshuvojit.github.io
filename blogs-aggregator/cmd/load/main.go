package main

import (
	"fmt"
	"sync"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(2)

	mediumLC := loaders.NewLoadConfig(
		constants.MEDIUM_RSS_URL,
		loaders.MediumLoader{},
		&wg,
	)
	hashnodeLC := loaders.NewLoadConfig(
		constants.HASHNODE_RSS_URL,
		loaders.HashnodeLoader{},
		&wg,
	)

	sources := []*loaders.LoadConfig{
		mediumLC, hashnodeLC,
	}

	for i := range sources {
		source := sources[i]
		go source.Load()
	}

	wg.Wait()
	fmt.Println("Done")
}
