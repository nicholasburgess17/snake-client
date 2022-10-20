const net = require("net");

const host = "::";
const port = 50541;

const connect = () => {
  const conn = net.createConnection({
    host, // IP address here,
    port, // PORT number here,
  });
  conn.on("connect", (connected) => {
    console.log("Connected");
    conn.write("Name: NB");
    conn.on("data", (serverData) => {
      console.log(serverData);
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");
  });
  return conn;
};

module.exports = connect;

//"Move: up" - move up one square (unless facing down)
//"Move: down" - move down one square (unless facing up)
//"Move: left" - move left one square (unless facing right)
//"Move: right" - move left one square (unless facing left)
