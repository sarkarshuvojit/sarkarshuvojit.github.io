package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/db"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/models/posts"
)

type PostListResponse struct {
	Posts []posts.Post `json:"posts,omitempty"`
}

func HandleRequest(ctx context.Context, _ interface{}) (string, error) {
	db, err := db.GetClient(context.TODO())
	defer db.Disconnect(context.TODO())

	if err != nil {
		log.Println("Couldn't connect to mongo")
		return "", err
	}
	postsRepo := posts.NewPostRepository(db)
	postlist, err := postsRepo.GetAll()
	if err != nil {
		return "", err
	}

	jsonBytes, err := json.Marshal(PostListResponse{Posts: postlist})
	return string(jsonBytes), err
}

func main() {
	lambda.Start(HandleRequest)
}
