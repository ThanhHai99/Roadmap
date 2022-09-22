package routes

import (
	"adward/pkg/controllers"
	"adward/pkg/services"
	"github.com/gin-gonic/gin"
	"github.com/shirou/gopsutil/host"
	"net/http"
)

var (
	adwardService    services.AdwardService       = services.New()
	adwardController controllers.AdwardController = controllers.New(adwardService)
)

func SetupRouter() *gin.Engine {
	routes := gin.Default()
	v1 := routes.Group("/api/v1")
	{
		v1.GET("healthcheck", func(ctx *gin.Context) {
			uptime, _ := host.Uptime()
			ctx.JSON(http.StatusOK, gin.H{
				"message": "OK",
				"uptime": uptime,
			})
		})

		v1.GET("adward", adwardController.Index)
		v1.POST("adward", adwardController.Store)
	}

	return routes
}
