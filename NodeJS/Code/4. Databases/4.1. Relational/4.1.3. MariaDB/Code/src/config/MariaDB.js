import { Sequelize } from "sequelize";

// let ConnectDB = (req, res) => {
  try {
    const sequelize = new Sequelize("nodejs", "root", "root", {
      host: "127.0.0.1",
      dialect: "mariadb",
      // operatorsAliases: false
    });

    module.exports = sequelize;
    global.sequelize = sequelize;

    sequelize.authenticate();
    console.log("Connect to MariaDB successfully===========");
  } catch (error) {
    console.log("Connect to MariaDB failure================");
  }
// };

// module.exports = ConnectDB;

