const { stdin } = require("process");
const { say, move } = require("./constants");
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
//function to manage user input
const handleUserInput = () => {
  stdin.on("data", (char) => {
    //movement
    if (char === "w") {
      connection.write(move + "up");
    }
    if (char === "a") {
      connection.write(move + "left");
    }
    if (char === "s") {
      connection.write(move + "down");
    }
    if (char === "d") {
      connection.write(move + "right");
    }
    //force close out of game
    if (char === "\u0003") {
      process.exit();
    }

    //send messages
    if (char === "p") {
      connection.write(say + "you stink!");
    }
    if (char === "o") {
      connection.write(say + "Nice try!");
    }
    if (char === "i") {
      connection.write(say + "haha!");
    }
    if (char === "u") {
      connection.write(say + "I'm #1");
    }
  });
};
module.exports = {
  setupInput,
};
