package models

import (
	"github.com/jinzhu/gorm"
	"time"
)

type Subject struct {
	gorm.Model
	Title string    `json:"title"`
	DueAt time.Time `json:"due_at"`
}
