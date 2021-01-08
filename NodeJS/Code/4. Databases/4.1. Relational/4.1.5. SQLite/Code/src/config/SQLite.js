import { Sequelize } from "sequelize";

// let ConnectDB = (req, res) => {
  try {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "D:\\tmp\\sqlite.db"
      // operatorsAliases: false
    });

    module.exports = sequelize;
    global.sequelize = sequelize;

    sequelize.authenticate();
    console.log("Connect to SQLite successfully===========");
  } catch (error) {
    console.log("Connect to SQLite failure================");
  }
// };

// module.exports = ConnectDB;

