// setup interface to handle user input from stdin
// allow us to listen for keyboard input and react to it
const setupInput = function () {
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
};

module.exports = { setupInput };