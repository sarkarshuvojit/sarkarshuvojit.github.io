package db

import (
	"context"
	"log"
	"os"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/constants"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetClient(ctx context.Context) (*mongo.Client, error) {
	uri := os.Getenv("MONGO_CONN")
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPI)

	log.Printf("Connecting to mongo at: %s\n", uri)
	return mongo.Connect(ctx, opts)
}

func InitSchema(ctx context.Context, client *mongo.Client) error {
	coll := client.Database(constants.DBNAME).Collection(constants.POST_COLL_NAME)
	unique := true
	coll.Indexes().CreateOne(ctx, mongo.IndexModel{
		Keys: bson.D{{"ogUrl", 1}},
		Options: &options.IndexOptions{
			Unique: &unique,
		},
	})
	return nil
}
