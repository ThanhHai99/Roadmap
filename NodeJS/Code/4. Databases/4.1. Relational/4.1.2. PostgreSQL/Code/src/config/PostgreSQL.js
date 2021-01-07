import { Sequelize } from "sequelize";

// let ConnectDB = (req, res) => {
  try {
    const sequelize = new Sequelize("nodejs", "postgres", "root", {
      host: "127.0.0.1",
      dialect: "postgres",
      // operatorsAliases: false
    });

    module.exports = sequelize;
    global.sequelize = sequelize;

    sequelize.authenticate();
    console.log("Connect to PostgreSQL successfully===========");
  } catch (error) {
    console.log("Connect to PostgreSQL failure================");
  }
// };

// module.exports = ConnectDB;

