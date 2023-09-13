package loaders_test

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

func TestMediumLoadSinglePost(t *testing.T) {
	absFilePath := filepath.Join("testdata/medium/single.post.xml")
	dummySrc, err := os.ReadFile(absFilePath)
	if err != nil {
		t.Error("Failed Reading:", err)
	}

	loader := loaders.MediumLoader{}
	postList, err := loader.Load(dummySrc)
	if err != nil {
		t.Error("Failed parsing", err)
	}

	// Assertions
	t.Run("length should match", func(t *testing.T) {
		if len(postList) != 1 {
			t.Errorf("Expected 1 post, got %d", len(postList))
		}
	})

	t.Run("Content should be accurate", func(t *testing.T) {
		firstPost := postList[0]
		expectedPost := posts.Post{
			Title:      "5 ways to write cleaner Angular Code: Part I",
			OgUrl:      "https://codeburst.io/5-ways-to-write-cleaner-angular-code-part-i-8a5339a3e957?source=rss-28b91177e737------2",
			OgImageUrl: "https://cdn-images-1.medium.com/max/1024/1*R1X2RDWnYr70_aCO05mHcg.jpeg",
		}

		if firstPost.Title != expectedPost.Title {
			t.Errorf("Expected `%s`, got `%s`", expectedPost.Title, firstPost.Title)
		}

		if firstPost.OgUrl != expectedPost.OgUrl {
			t.Errorf("Expected `%s`, got `%s`", expectedPost.OgUrl, firstPost.OgUrl)
		}

		if firstPost.OgImageUrl != expectedPost.OgImageUrl {
			t.Errorf("Expected `%s`, got `%s`", expectedPost.OgImageUrl, firstPost.OgImageUrl)
		}
	})

}
