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
    switch (char) {
      //basic movements
      case "w": 
      connection.write(move + "up")
        break;
      case "a":
        connection.write(move + "left")
        break;
      case "s":
        connection.write(move + "down")
        break;
      case "d":
        connection.write(move + "right")
        break;

        //trash talk
      case "p":
        connection.write(say + "you stink!");
        break;
      case "o":
        connection.write(say + "Nice try!")
        break;
      case "i":
        connection.write(say + "haha!");
        break;
      case "u":
        connection.write(say + "I'm #1")
        break;

        //get me out of here
      case "\u0003":
          process.exit();
          break;
    }
});
}

module.exports = {
  setupInput,
};
