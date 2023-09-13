package loaders

import (
	"bytes"
	"regexp"

	"github.com/mmcdole/gofeed"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

type MediumLoader struct{}

func (ml MediumLoader) Parse(src []byte) ([]posts.Post, error) {
	re := regexp.MustCompile(`(?m)src="(.*?)"`)
	fp := gofeed.NewParser()
	feed, err := fp.Parse(bytes.NewReader(src))
	if err != nil {
		return nil, err
	}

	var postList []posts.Post
	for i := range feed.Items {
		feedItem := feed.Items[i]
		content := feedItem.Content
		matchFromContent := re.FindStringSubmatch(content)
		ogImageUrl := matchFromContent[1]
		postList = append(postList, posts.Post{
			Title:      feedItem.Title,
			OgUrl:      feedItem.Link,
			OgImageUrl: ogImageUrl,
		})
	}

	return postList, nil
}
