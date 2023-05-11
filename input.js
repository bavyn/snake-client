const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, j, k, l, f } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
// allow us to listen for keyboard input and react to it
const setupInput = function (conn) {
  connection = conn; // setupInput accepts an object (conn) that lets you interact with the server
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener, a function called handleUserInput
  return stdin;
};

// event listener for stdin.  listener will use function handleUserInout that runs when you receive input from keyboard
// specifies what happens when data is received from stdin aka when a particular key is pressed on keyboard input 
const handleUserInput = function (key) {
  //const stdout = process.stdout;
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === 'j') {
    connection.write("Say: hi");
  }
  if (key === 'k') {
    connection.write("Say: bye");
  }
  if (key === 'l') {
    connection.write("Say: sucka");
  }
  if (key === 'f') {
    connection.write("Say: nice move");
  }
};


module.exports = { setupInput };