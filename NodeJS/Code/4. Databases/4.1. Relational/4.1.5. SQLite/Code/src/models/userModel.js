import { Sequelize, DataTypes } from "sequelize";
require("./../config/SQLite");

const UserModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdAt: new Date(),
	updatedAt: "updateTimestamp"
};

module.exports = sequelize.define("UserModel", UserModel, {
	tableName: "user"
});
