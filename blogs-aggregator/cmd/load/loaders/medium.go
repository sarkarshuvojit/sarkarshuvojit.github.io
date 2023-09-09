package loaders

import (
	"bytes"

	"github.com/mmcdole/gofeed"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type MediumLoader struct{}

func (ml MediumLoader) Load(src []byte) ([]posts.Post, error) {
	fp := gofeed.NewParser()
	feed, err := fp.Parse(bytes.NewReader(src))
	if err != nil {
		return nil, err
	}

	var postList []posts.Post
	for i := range feed.Items {
		feedItem := feed.Items[i]
		postList = append(postList, posts.Post{
			Slug: feedItem.Title,
		})
	}

	return postList, nil
}
