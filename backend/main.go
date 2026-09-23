package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

var NOTES = []string{"shopping", "fitness", "learning", "Personal Project"}

func getNotes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(NOTES)
}

func main() {
	http.HandleFunc("/notes", getNotes)

	fmt.Println("Server started")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		fmt.Println("Server unable to start", err)
	}
}
