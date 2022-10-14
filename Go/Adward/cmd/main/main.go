package main

import (
	"adward/pkg/routes"
	"adward/pkg/util"
)

func main() {
	util.LoadEnvVars()
	server := routes.SetupRouter()

	err := server.Run(":" + util.GetEnv("APP_PORT", "8888"))
	if err != nil {
		return
	}
}
