const { Client } = require('ssh2');
const net = require('net');
require("dotenv").config();
const Post = require('../models/models');
class SSH {
  constructor() {
    this.conn = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      if (this.conn && !this.conn.destroyed && this.conn.readyState() === 'open') {
        resolve();
        return;
      }

      this.conn = new Client();
      this.conn.on('error', (err) => {
        console.error('An error occurred:', err);
        reject(err);
      });
      this.conn.on('ready', () => {
        const socket = conn._sock;
        socket.allowHalfOpen = false;
        console.log('Connected to SSH server');
        resolve();
      });
      this.conn.connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        strictVendor: false,
        hostVerifier: () => true,
        allowHalfOpen: false
      });
    });
  }

  async exec(command,afifliate, affcode, transtype) {
    await this.connect();
    return new Promise((resolve, reject) => {
      //, { allowHalfOpen: false }
      try{
      const stream = this.conn.exec(command, { allowHalfOpen: false });
      let output = '';
      stream.on('data', function(data) {
        console.log('STDOUT: ' + data);
        output += data;
      }).stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
      }).on('close', async function(code) {
        console.log(`Command "${command}" exited with code ${code}`);
        if (!output.trim()) {
          console.log('Script output is empty');
        }else{
          
          //controlller
          const jsonStartIndex = output.indexOf('{');
          const jsonEndIndex = output.lastIndexOf('}') + 1;
          const jsonString = output.slice(jsonStartIndex, jsonEndIndex);
          const valueString = output.substring(jsonEndIndex).trim(); // Extract the string value and remove any leading/trailing whitespace
          console.log(` TAT value ${valueString}`); // Output: "Total time: 1.250697 seconds"
          // const match = valueString.match(/Total time: (\d+\.\d+) seconds/);
          const match = valueString.match(/(\d+\.\d+) seconds/);
          let totalTime;
          if (match) {
            totalTime = match[1];
            console.log(`TAT new value: ${totalTime}`); // Output: 1.250697
          }else{
            totalTime =0
          }
        
          try {
            const jsonObject2 = JSON.parse(jsonString);
            console.log('JSON is valid');
            console.log(jsonObject2);
            const statusMessage = jsonObject2.statusMessage;
            console.log(`status message ${statusMessage}`);
            const messages = jsonObject2.result.message;
            console.log(`response message ${messages}`);
            let post = new Post(afifliate, affcode, totalTime, statusMessage, transtype, messages);
            post = await post.save();
            console.log(post);
          } catch (error) {
            console.log('JSON is not valid');
            // console.log(jsonString);
            let post = new Post(afifliate, affcode, totalTime, "Time out", transtype, "Time out");
            post = await post.save();
            console.log(post);
          }

          
        }
       
        resolve(output);
      });
    }catch (err) {
      console.log('Error executing command:', err);
      reject(err);
    }

    });
  }

  end() {
    if (this.conn && !this.conn.destroyed) {
     this.conn.end();
    }
  }
}

module.exports = { SSH };