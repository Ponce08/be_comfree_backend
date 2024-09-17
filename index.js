//? Dependencies
const server = require("./src/server");
const saveInfo = require("./src/saveInfo");
const userAdmin = require("./src/utilities/userAdmin");
const { connection } = require("./src/db");
require("dotenv").config();

//? Utilities
const port = process.env.PORT || 3001

(startServer = async () => {
  try {
    await connection.sync({ force: true }); //! true borra
    await userAdmin();
    await saveInfo();
    server.listen(port, () =>
      console.log(`Server raised in port: ${port}`)
    );
  } catch (error) {
    console.log("Server not started", error);
  }
})();
