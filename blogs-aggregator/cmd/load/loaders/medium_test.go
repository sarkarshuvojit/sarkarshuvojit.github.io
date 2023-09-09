package loaders_test

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/posts"
)

func TestLoadSinglePost(t *testing.T) {
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

	t.Run("length should match", func(t *testing.T) {
		if len(postList) != 1 {
			t.Errorf("Expected 1 post, got %d", len(postList))
		}
	})

	t.Run("Content should be accurate", func(t *testing.T) {
		firstPost := postList[0]
		expectedPost := posts.Post{
			Title: "How to make sense of error logs?",
		}

		if firstPost.Title != expectedPost.Title {
			t.Errorf("Expected `%s`, got `%s`", expectedPost.Title, firstPost.Title)
		}
	})

}
