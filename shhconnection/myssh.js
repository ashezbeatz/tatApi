const { Client } = require('ssh2');
require("dotenv").config();
let conn = new Client();

function createConnection() {
  conn.on('ready', () => {
    console.log('SSH connection established');
  }).connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        strictVendor: false,
        hostVerifier: () => true
  });

  // You can also add an error handler to check for connection errors
  conn.on('error', (err) => {
    console.log(`SSH connection error: ${err}`);
    conn.end();
  });
}

// Store the session variable as null initially
let session = null;

module.exports = {
  conn,
  session,
  createConnection,
};