package handler

import (
	"github.com/jinzhu/gorm"
	echo "github.com/labstack/echo/v4"
	"net/http"
)

type Server struct {
	db *gorm.DB
}

func NewHandler(db *gorm.DB) http.Handler {
	e := echo.New()
	s := &Server{db: db}
	e.GET("/subjects", s.getAllSubjects)
	e.POST("/subjects", s.createSubject)
	e.GET("/subjects/:id", s.getSubject)
	e.PUT("/subjects/:id", s.updateSubject)
	e.DELETE("/subjects/:id", s.deleteSubject)

	return e
}
