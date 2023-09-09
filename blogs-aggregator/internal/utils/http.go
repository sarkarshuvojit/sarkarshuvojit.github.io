package utils

import (
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
)

func GetRssContent(url string) ([]byte, error) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
	}

	defer res.Body.Close()
	resBody, readErr := io.ReadAll(res.Body)
	if readErr != nil {
		return nil, errors.New(fmt.Sprintf("Unable to fetch content from: %s", url))
	}

	return resBody, nil
}
