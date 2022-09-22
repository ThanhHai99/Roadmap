package util

import (
	"os"

	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
)

func GetEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value != "" {
		return value
	}

	return defaultValue
}

func LoadEnvVars() {
	env := GetEnv("APP_ENV", "debug")

	filename := ".env." + env

	if _, err := os.Stat(filename); os.IsNotExist(err) {
		filename = ".env"
	}

	err := godotenv.Load(filename)
	if err != nil {
		log.Warn(".env file not loaded")
	}
}
