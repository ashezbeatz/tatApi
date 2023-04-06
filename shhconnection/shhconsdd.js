const { Client } = require('ssh2');
require("dotenv").config();
const Post = require('../models/models');




async function newgetddnewsSSHScript(scripts) {
    return new Promise((resolve, reject) => {
      const conn = new Client();
      conn.on('error', (err) => {
        console.error('An error occurred:', err);
        reject(err);
      });
      conn.on('ready', async function() {
        console.log('Client :: ready');
      /*  const paths = process.env.HOSTPATH + path;
        console.log('paths ', paths);
        console.log('params ', arrysLists);
        const scriptArgs = arrysLists;
        console.log("arry join "+scriptArgs.join(' '))*/
        scripts.forEach(async script => {


            try {
                console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
      
                const stream = await conn.exec(`bash ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`);
                stream.on('data', function(data) {
                  console.log('STDOUT: ' + data);
                  output += data;
                }).stderr.on('data', function(data) {
                  console.log('STDERR: ' + data);
                }).on('close', async function(code) {
                  console.log('Script exited with code ' + code);
                  // ... the rest of your code
                //   if (!output.trim()) {
                //     console.log('Script output is empty');
                //   }else{
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
                    let post = new Post(script.afifliate, script.affcode, script.totalTime, statusMessage, script.transtype, messages);
                    post = await post.save();
                    console.log(post);
                  } catch (error) {
                    console.log('JSON is not valid');
                    // console.log(jsonString);
                    let post = new Post(script.afifliate, script.affcode, script.totalTime, "Time out", script.transtype, "Time out");
                    post = await post.save();
                    console.log(post);
                  }
                
                  try {
                    const jsonObject = JSON.parse(output);
                    console.log('Output is valid JSON');
                    console.log(jsonObject);
                  } catch (error) {
                    console.log('Output is not valid JSON');
                  }
                
            
                 //codes
                });
              } catch (err) {
                console.log('Error executing command:', err);
                reject(err);
              }


              conn.end();
              resolve();

        });
        
       
      });
      console.log("host "+ process.env.HOST);
      conn.connect({
        
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


//,afifliate, affcode, transtype

async function runScript(path, args) {
    return new Promise(async (resolve, reject) => {
      if (conn && conn.readyState() === 'open') { // check if there is an existing connection
        console.log(`Using existing connection to run script ${path} with args ${args}`);
      } else { // create a new connection if there isn't one
        conn = new Client();
        conn.on('error', (err) => {
          console.error('An error occurred:', err);
          reject(err);
        });
        conn.on('ready', () => {
          console.log(`Connected to ${process.env.HOST}:${process.env.SSHPORT}`);
          resolve();
        });
        conn.connect({
          host: process.env.HOST,
          port: process.env.SSHPORT,
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          strictVendor: false,
          hostVerifier: () => true,
          allowHalfOpen: true 
        });
      }
  
      console.log(`Running script ${path} with args ${args}`);
      const fullPath = process.env.HOSTPATH + path;
      const scriptArgs = args.join(' ');
      console.log(`Running script full path ${fullPath} with args ${scriptArgs}`);
      try {
        const stream = await conn.exec(`bash ${fullPath} ${scriptArgs}`, { allowHalfOpen: true });
        let output = '';
        stream.on('data', function(data) {
          console.log('STDOUT: ' + data);
          output += data;
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        }).on('close', async function(code) {
          console.log(`Script ${path} exited with code ${code}`);
          // process output and handle errors here
           if (!output.trim()) {
                    console.log('Script output is empty');
                  }else{

                    //controlller
                  }

          resolve();
        });
      } catch (err) {
        console.error(`Error running script ${path} with args ${args}:`, err);
        reject(err);
      }
    });
  }


  module.exports = {
    newgetddnewsSSHScript,
    runScript
  }