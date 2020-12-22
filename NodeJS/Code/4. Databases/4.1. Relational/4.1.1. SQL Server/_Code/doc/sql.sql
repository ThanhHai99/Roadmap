USE master
GO

IF EXISTS (SELECT * FROM sys.sysdatabases WHERE name='nodejs')
	DROP DATABASE nodejs
GO

CREATE DATABASE nodejs
GO

USE nodejs
GO

CREATE TABLE [user](
	id INTEGER PRIMARY KEY,
	username NVARCHAR(100) NOT NULL,
	password NVARCHAR(100) NOT NULL,
)
GO

INSERT INTO dbo.[user](id, username, password) VALUES  (1, N'Trần Viết Thanh Hải', '12345678');
GO
INSERT INTO dbo.[user](id, username, password) VALUES  (2, N'Nguyễn Thị Kim Ngân', '12345678');
GO
