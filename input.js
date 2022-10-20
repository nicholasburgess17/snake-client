const { stdin } = require("process");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};
const handleUserInput = () => {
  stdin.on("data", (char) => {
    if (char === "w") {
      connection.write("Move: up");
    }
    if (char === "a") {
      connection.write("Move: left");
    }
    if (char === "s") {
      connection.write("Move: down");
    }
    if (char === "d") {
      connection.write("Move: right");
    }
    if (char === "\u0003") {
      process.exit();
    }
  });
};
module.exports = {
  setupInput,
};
