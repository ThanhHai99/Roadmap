package main

import (
	"flag"
	"github.com/go-kit/kit/log"
	"github.com/todo_app/server/db"
	"github.com/todo_app/server/handler"
	"net/http"
	"os"
	"time"
)

var (
	fs       = flag.NewFlagSet("todo_app", flag.ExitOnError)
	httpAddr = fs.String("http-addr", ":8080", "HTTP server address")
	dbConfig = fs.String("mysql", os.Getenv("GORM_DIALECT"), "mysql db connection")
)

func main() {
	logger := log.NewJSONLogger(os.Stdout)
	logger = log.WithPrefix(logger, "ts", log.DefaultTimestamp)
	logger.Log("mysql", *dbConfig)

	db, err := db.Connect()
	if err := fs.Parse(os.Args[1:]); err != nil {
		logger.Log("binding", "flag", "err", err)
		os.Exit(1)
	}
	if err != nil {
		logger.Log("mysql", "err", err)
		os.Exit(1)
	}
	defer db.Close()

	server := &http.Server{
		Handler:      handler.NewHandler(db),
		Addr:         *httpAddr,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	logger.Log("http", "server", "addr", *httpAddr)

	if err := server.ListenAndServe(); err != nil {
		logger.Log("http", "server", "err", err)
		os.Exit(1)
	}
}
