package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"math"
	"net/http"
	"os"
	"sort"
	"strconv"
)

type ScoreSorter []Data

func (a ScoreSorter) Len() int           { return len(a) }
func (a ScoreSorter) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a ScoreSorter) Less(i, j int) bool { return a[i].Score > a[j].Score }

type Data struct {
	Difficulty string `json: "difficulty"`
	Username   string `json: "username"`
	Score      int    `json: "score"`
	Time       string `json: "time"`
}

var memoryDB []Data

func Ordinalize(num int) string {

	var ordinalDictionary = map[int]string{
		0: "th",
		1: "st",
		2: "nd",
		3: "rd",
		4: "th",
		5: "th",
		6: "th",
		7: "th",
		8: "th",
		9: "th",
	}

	// math.Abs() is to convert negative number to positive
	floatNum := math.Abs(float64(num))
	positiveNum := int(floatNum)

	if ((positiveNum % 100) >= 11) && ((positiveNum % 100) <= 13) {
		return strconv.Itoa(num) + "th"
	}

	return strconv.Itoa(num) + ordinalDictionary[positiveNum]

}

//POSTING NEW HIGHSCORES + SEARCH FUNCTION
func apiResponse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
		
	case "POST":
		w.WriteHeader(http.StatusCreated)

		reqBody, err := io.ReadAll(r.Body)
		if err != nil {
			log.Fatal(err)
		}

		var onePerson Data

		byteValue, _ := ioutil.ReadFile("./data/data.json")
		json.Unmarshal([]byte(byteValue), &memoryDB)

		json.Unmarshal([]byte(reqBody), &onePerson)
		memoryDB = append(memoryDB, onePerson)

		dataBytes, err := json.MarshalIndent(memoryDB, "", " ")
		if err != nil {
			os.Exit(1)
		}

		err = ioutil.WriteFile("./data/data.json", dataBytes, 0644)
		if err != nil {
			os.Exit(1)
		}

		var tempDB []Data
		for i := range memoryDB {

			if onePerson.Difficulty == memoryDB[i].Difficulty {
				tempDB = append(tempDB, memoryDB[i])
			}
		}

		sort.Sort(ScoreSorter(tempDB))

		var position int
		for i := range tempDB {
			if tempDB[i].Score == onePerson.Score {
				position = i + 1
			}
		}
		var total = len(tempDB)
		percent := strconv.Itoa(position / total)

		ordPosition := Ordinalize(position)

		response := "Congrats " + onePerson.Username + "," + " you are in the top " + percent + "%, on the " + ordPosition + " position in " + onePerson.Difficulty +  " difficulty"
		w.Write([]byte(response))
	default:
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"message": "Can't find method requested"}`))
	}
}

//GETTING ONLY HIGHSCORES ON EASY DIFFICULTY
func getResponseEasy(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case "GET":
		w.WriteHeader(http.StatusOK)
		var tempDB []Data
		byteValue, _ := ioutil.ReadFile("./data/data.json")
		json.Unmarshal([]byte(byteValue), &memoryDB)

		for i := range memoryDB {
			if memoryDB[i].Difficulty == "easy" {
				tempDB = append(tempDB, memoryDB[i])
			}
		}
		sort.Sort(ScoreSorter(tempDB))

		var jsonData []byte
		jsonData, _ = json.Marshal(tempDB)
		w.Write(jsonData)

	default:
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"message": "Can't find method requested"}`))
	}
}

//GETTING ONLY HIGHSCORES ON MEDIUM DIFFICULTY
func getResponseMedium(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	switch r.Method {
	case "GET":
		w.WriteHeader(http.StatusOK)

		byteValue, _ := ioutil.ReadFile("./data/data.json")
		json.Unmarshal([]byte(byteValue), &memoryDB)

		var tempDB []Data
		for i := range memoryDB {
			if memoryDB[i].Difficulty == "medium" {
				tempDB = append(tempDB, memoryDB[i])
			}
		}
		sort.Sort(ScoreSorter(tempDB))

		var jsonData []byte
		jsonData, _ = json.Marshal(tempDB)
		w.Write(jsonData)

	default:
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"message": "Can't find method requested"}`))
	}
}

//GETTING ONLY HIGHSCORES ON HARD DIFFICULTY
func getResponseHard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	switch r.Method {
	case "GET":
		w.WriteHeader(http.StatusOK)

		byteValue, _ := ioutil.ReadFile("./data/data.json")
		json.Unmarshal([]byte(byteValue), &memoryDB)

		var tempDB []Data
		for i := range memoryDB {
			if memoryDB[i].Difficulty == "hard" {
				tempDB = append(tempDB, memoryDB[i])
			}
		}
		sort.Sort(ScoreSorter(tempDB))

		var jsonData []byte
		jsonData, _ = json.Marshal(tempDB)
		w.Write(jsonData)

	default:
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte(`{"message": "Can't find method requested"}`))
	}
}

//API MANAGER
func main() {
	fileServer := http.FileServer(http.Dir("./root"))
	http.Handle("/", fileServer)

	http.HandleFunc("/data", apiResponse)
	http.HandleFunc("/data/easy", getResponseEasy)
	http.HandleFunc("/data/medium", getResponseMedium)
	http.HandleFunc("/data/hard", getResponseHard)

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}
