const http = require("http");
const fs = require("fs");
const UserApp=require("./user")
const server = http.createServer(UserApp)


server.listen(3000, () => {
    console.log("server is start successfully");
  });
  