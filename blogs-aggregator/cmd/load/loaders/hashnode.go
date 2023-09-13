package loaders

import (
	"bytes"

	"github.com/mmcdole/gofeed"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type HashnodeLoader struct{}

func (ml HashnodeLoader) Parse(src []byte) ([]posts.Post, error) {
	fp := gofeed.NewParser()
	feed, err := fp.Parse(bytes.NewReader(src))
	if err != nil {
		return nil, err
	}

	var postList []posts.Post
	for i := range feed.Items {
		feedItem := feed.Items[i]
		postList = append(postList, posts.Post{
			Title:      feedItem.Title,
			OgUrl:      feedItem.Link,
			OgImageUrl: feedItem.Custom["cover_image"],
		})
	}

	return postList, nil
}
