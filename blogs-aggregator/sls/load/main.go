package main

import (
	"context"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/loaders"
)

func HandleRequest(ctx context.Context, _ interface{}) (string, error) {
	l := loaders.NewLoaderService()
	if err := l.Start(); err != nil {
		return err.Error(), err
	}
	return "Done", nil
}

func main() {
	lambda.Start(HandleRequest)
}
