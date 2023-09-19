package main

import (
	"flag"
	"fmt"
	"io"
	"log"
	"os"

	"github.com/sarkarshuvojit/sarkarshuvojit.github.io/blogs-aggregator/internal/loaders"
)

func main() {
	setVerbosity()

	l := loaders.LoadService{}
	if err := l.Start(); err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
}

// Parses flags and reads --verbose
// If not found then all log output is sent to io.Discard
func setVerbosity() {
	isVerbose := flag.Bool("v", false, "Enable to view detailed logs")
	flag.Parse()

	if !*isVerbose {
		log.SetOutput(io.Discard)
	}
}
