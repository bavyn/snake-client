const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  },
  // register another event handler for the connect event
  conn.on("connect", () => {
    conn.write("Name: KAR");
    console.log("Successfully connected to game server");
  }));
  return conn;

};

console.log("Connecting ...");
connect();

module.exports = { connect };