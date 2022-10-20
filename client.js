const net = require("net");

const host = "::"
const port = 50541

const connect = () => {
  const conn = net.createConnection({
    host, // IP address here,
    port // PORT number here,
  });
  conn.on("connect", (connected) => {
    console.log("Connected")
    conn.write("Name: NB")
  });
  conn.on("data", (serverData) => {
    console.log(serverData);
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
  
};

module.exports = connect;
