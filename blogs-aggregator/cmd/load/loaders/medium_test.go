package loaders_test

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/cmd/load/loaders"
)

func TestLoadSinglePost(t *testing.T) {
	dummySrc, err := os.ReadFile(filepath.Join("testdata/medium/single.post.xml"))
	if err != nil {
		t.Error(err)
	}

	loader := loaders.MediumLoader{}
	posts, err := loader.Load(dummySrc)
	if err != nil {
		t.Error("Failed parsing", err)
	}

	if len(posts) != 1 {
		t.Errorf("Expected 1 post, got %d", len(posts))
	}

}
