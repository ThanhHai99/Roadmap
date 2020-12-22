import sql from "mssql";

let ConnectDB = (req, res) => {
  console.log("start connect to sql server");
  const config = {
    server: "192.168.10.252",
    user: "sa",
    password: "sa",
    database: "nodejs",
    port: 1433, //default port for sql server
    options: {
      encrypt: false, //if on Windows Azure will set to true
    }
  };


  function getAllUser() {
    let connection = new sql.ConnectionPool(config);
    connection.connect(function (err) {
      if (err)
        console.log("Err: " + err);

      let request = new sql.Request(connection);
      request.query("select * from [user]", function (err, recordset) {
        if (err)
          console.log("Err: " + err);
        else
          console.log(recordset);
        connection.close();
      });
      // console.log("connect successful");
      console.log("end connect to sql server");
    });
  }

  getAllUser();

};

module.exports = ConnectDB;