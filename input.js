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
    //movement 
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
    //force close out of game
    if (char === "\u0003") {
      process.exit();
    }
    //send messages
    if (char === "p") {
      connection.write("Say: you stink!")
    } 
    if (char === "o") {
      connection.write("Say: Nice try!")
    } 
    if (char === "i") {
      connection.write("Say: haha!")
    } 
    if (char === "u") {
      connection.write("Say: I'm #1")
    } 
  });
};
module.exports = {
  setupInput,
};
