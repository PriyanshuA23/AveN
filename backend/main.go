package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type note struct {
	title       string
	description string
}

var NOTES = []note{
	{title: "shopping", description: "This is my first shopping note"},
	{title: "Learning Go", description: "This is my second note for learning go"},
}

func getNotes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	titles := make([]string, len(NOTES))

	for i := 0; i < len(NOTES); i++ {
		titles = append(titles, NOTES[i].title)
	}

	json.NewEncoder(w).Encode(titles)
}

func main() {
	http.HandleFunc("/notes", getNotes)

	fmt.Println("Server started")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		fmt.Println("Server unable to start", err)
	}
}
