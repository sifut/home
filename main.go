package main

import (
	"net/http"
	"text/template"
	"time"

	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
	"github.com/phyber/negroni-gzip/gzip"
)

func main() {
	// Add routes
	r := mux.NewRouter().StrictSlash(true)
	r.HandleFunc("/", HomeHandler).Methods("GET")

	// Setup middlewares
	n := negroni.New(
		negroni.NewRecovery(),
		negroni.NewLogger(),
		negroni.NewStatic(http.Dir("public")),
		gzip.Gzip(gzip.DefaultCompression),
	)

	// Run webserver
	n.UseHandler(r)
	n.Run(":8080")
}

type Home struct {
	Year int
}

func HomeHandler(w http.ResponseWriter, req *http.Request) {
	html, _ := template.ParseFiles("view/layout.html")
	html.Execute(w, Home{Year: time.Now().Year()})
}
