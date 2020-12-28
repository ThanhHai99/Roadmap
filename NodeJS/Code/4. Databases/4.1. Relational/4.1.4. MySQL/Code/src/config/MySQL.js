import { Sequelize } from "sequelize";

// let ConnectDB = (req, res) => {
  try {
    const sequelize = new Sequelize("nodejs", "root", "", {
      host: "127.0.0.1",
      dialect: "mysql",
      // operatorsAliases: false
    });

    module.exports = sequelize;
    global.sequelize = sequelize;

    sequelize.authenticate();
    console.log("Connect to MySQL successfully===========");
  } catch (error) {
    console.log("Connect to MySQL failure================");
  }
// };

// module.exports = ConnectDB;

