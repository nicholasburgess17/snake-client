const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '::',// IP address here,
    port: 50541 // PORT number here,
  },);
 
conn.on("data", (serverData) => {
  console.log(serverData)
})
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();