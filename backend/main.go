package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type note struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

var NOTES = []note{
	{Title: "shopping", Description: "This is my first shopping note"},
	{Title: "Learning Go", Description: "This is my second note for learning go"},
}

func getNotes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	titles := make([]string, len(NOTES))

	for i := 0; i < len(NOTES); i++ {
		titles[i] = NOTES[i].Title
	}

	json.NewEncoder(w).Encode(titles)
}

func saveNote(w http.ResponseWriter, r *http.Request) {
	var request note
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewDecoder(r.Body).Decode(&request)

	NOTES = append(NOTES, request)
}

func main() {
	http.HandleFunc("/notes", getNotes)
	http.HandleFunc("/save", saveNote)

	fmt.Println("Server started")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		fmt.Println("Server unable to start", err)
	}
}
