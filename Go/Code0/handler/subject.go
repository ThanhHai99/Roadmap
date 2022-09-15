package handler

import (
	"github.com/jinzhu/gorm"
	"github.com/labstack/echo/v4"
	"github.com/todo_app/server/models"
	"net/http"
)

func (s Server) getAllSubjects(c echo.Context) (err error) {
	subjects := []models.Subject{}
	s.db.Find(&subjects)
	return c.JSONPretty(http.StatusOK, &subjects, "  ")
}

func (s Server) createSubject(c echo.Context) (err error) {
	subject := new(models.Subject)
	if err = c.Bind(subject); err != nil {
		return
	}

	s.db.Create(&subject)

	return c.JSONPretty(http.StatusOK, subject, "  ")
}

func (s Server) getSubject(c echo.Context) (err error) {
	subject, err := getSubjectOr404(s.db, c.Param("id"))
	if subject == nil {
		return
	}
	return c.JSONPretty(http.StatusOK, &subject, "  ")
}

func (s Server) updateSubject(c echo.Context) (err error) {
	subject, err := getSubjectOr404(s.db, c.Param("id"))
	if subject == nil {
		return
	}

	if err = c.Bind(subject); err != nil {
		return
	}

	if err = s.db.Model(&subject).Updates(&subject).Error; err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}
	return c.JSONPretty(http.StatusOK, &subject, "  ")
}

func (s Server) deleteSubject(c echo.Context) (err error) {
	id := c.Param("id")
	subject, err := getSubjectOr404(s.db, id)

	if subject == nil {
		return
	}

	if err = s.db.Delete(&models.Subject{}, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusNoContent, nil)
}

func getSubjectOr404(db *gorm.DB, id string) (*models.Subject, *echo.HTTPError) {
	s := &models.Subject{}
	if err := db.First(&s, id).Error; err != nil {
		return nil, echo.NewHTTPError(http.StatusNotFound, err.Error())
	}
	return s, nil
}
