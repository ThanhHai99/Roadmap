package db

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"os"
)

var (
	//dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
	dbUser = ""
	dbName = ""
	dbPass = ""
	dbHost = ""
	dbPort = 1
	dbDSN  = "root:root@tcp(gorm_db)/gorm_todo?charset=utf8mb4&parseTime=True&loc=Local"
)

func Connect() (db *gorm.DB, err error) {
	db, err = gorm.Open("mysql", os.Getenv("GORM_DIALECT"))
	return db, err
}
