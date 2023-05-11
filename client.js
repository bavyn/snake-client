const net = require("net");
const { IP, port, playerName } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: port, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  },
  // register another event handler for the connect event
  conn.on("connect", () => {
    conn.write(playerName);
    console.log("Successfully connected to game server");
  }));
  return conn;

};

module.exports = { connect };

// if i wanted to implement set interval or timer, it would be as per below
// conn.on("connect", () => {
//   conn.write("Name: KAR");
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 1000);
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 500);
 // console.log()
// })