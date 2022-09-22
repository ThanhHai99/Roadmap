package controllers

import (
	"adward/pkg/models"
	"adward/pkg/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type AdwardController interface {
	Index(ctx *gin.Context)
	Store(ctx *gin.Context)
}

type controller struct {
	service services.AdwardService
}

func New(service services.AdwardService) AdwardController {
	return &controller{
		service: service,
	}
}

func (c *controller) Index(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, c.service.All())
}

func (c *controller) Store(ctx *gin.Context) {
	var adward models.Adward
	ctx.ShouldBindJSON(&adward)
	c.service.Save(adward)
	ctx.JSON(http.StatusCreated, adward)
}
