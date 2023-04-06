const { Client } = require('ssh2');
require("dotenv").config();
let conn = new Client();

function createConnection() {
  console.log("host"+ process.env.HOST)
  return new Promise((resolve, reject) => {
    conn.on('error', (err) => {
        console.error('An error occurred:', err);
        reject(err);
      });
    conn.on('ready', () => {
      console.log('SSH connection established');
      const session = { conn };
      resolve(session);
    }).on('error', (err) => {
      console.log(`SSH connection error: ${err}`);
      reject(err);
      conn.end();
    }).connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        strictVendor: false,
        hostVerifier: () => true,
        allowHalfOpen: true,
    });
  });
}

module.exports = {
  createConnection,
};