import { DataTypes, Sequelize } from "sequelize";
require("./../config/MySQL");
import UserModel from "./userModel";

const NewsModel = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	content: {
		type: DataTypes.STRING
	},
	userID: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel,
      key: "id",
    }
	},
	createdAt: true,
	updatedAt: "updateTimestamp"
}

module.exports = sequelize.define("NewsModel", NewsModel, {
	tableName: "news"
});
