const { Client } = require('ssh2');
require("dotenv").config();

const Post = require('../models/models');

// Function to execute each script in the array
async function executeScripts(scripts) {
    const conn = new Client();
    await conn.connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD // replace with your SSH password or use other authentication methods supported by ssh2
    });
  
    for (let i = 0; i < scripts.length; i++) {
      const { script, params, affiliate, affcode, transtype } = scripts[i];
      console.log(`${process.env.HOSTPATH}${script} ${params.join(' ')}`);
       
      // Construct the command to execute the script with its parameters
      const command = `bash ${process.env.HOSTPATH}${script} ${params.join(' ')} `;
  
      console.log(`Executing script ${i+1}: ${command}`);
  
      // Execute the command and wait for it to complete
      const result = await new Promise((resolve, reject) => {
        conn.exec(command, (err, stream) => {
          if (err) reject(err);
          let output = '';
          stream.on('data', data => output += data.toString());
          stream.on('end', () => resolve(output));
        });
      });
  
      console.log(`Script ${i+1} output:\n${result}`);
    }
    //end for loop
    conn.end();
  }


  async function executeScripts2(scripts) {
const connSettings = {

    host: process.env.HOST,
    port: process.env.SSHPORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD 
  };
  
  const conn = new Client();
  
  conn.on('ready', function() {
    console.log('SSH connection established.');
  
    // Execute each script
    scripts.forEach(async script => {
      console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
  
      await conn.exec(`sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, function (err, stream) {
            if (err)
                throw err;

            let output = '';
            stream.on('data', data => output += data.toString());
            stream.on('end', function () {
                console.log(`Script output: ${output}`);
                // Do something with the output
                const jsonStartIndex = output.indexOf('{');
                const jsonEndIndex = output.lastIndexOf('}') + 1;
                const jsonString = output.slice(jsonStartIndex, jsonEndIndex);
                const valueString = output.substring(jsonEndIndex).trim(); // Extract the string value and remove any leading/trailing whitespace
                console.log(` TAT value ${valueString}`); // Output: "Total time: 1.250697 seconds"
               // const match = valueString.match(/Total time: (\d+\.\d+) seconds/);
                const match = valueString.match(/(\d+\.\d+) seconds/);
                let totalTime ;
                if (match) {
                    totalTime = match[1];
                    console.log(`TAT new value: ${totalTime}`); // Output: 1.250697
                  }

                  

            });
        });
    });
  
    conn.end(); // Close the connection after all scripts are executed
  });
  
  conn.connect(connSettings);
  }




  async function executeScriptsNew(scripts) {
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD 
    };
    
    const conn = new Client();
    
    const connPromise = new Promise((resolve, reject) => {
      conn.on('ready', function() {
        console.log('SSH connection established.');
        resolve();
      });
      
      conn.on('error', function(err) {
        console.log('Error connecting to server:', err);
        reject(err);
      });
    });
    
    await connPromise;
    
    // Execute each script
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`);
  
      const streamPromise = new Promise((resolve, reject) => {
        conn.exec(`sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, function (err, stream) {
          if (err) {
            reject(err);
            return;
          }
  
          let output = '';
          stream.on('data', data => output += data.toString());
          stream.on('end', function () {
            console.log(`Script output: ${output}`);
            // Do something with the output
            const jsonStartIndex = output.indexOf('{');
            const jsonEndIndex = output.lastIndexOf('}') + 1;
            const jsonString = output.slice(jsonStartIndex, jsonEndIndex);
            const valueString = output.substring(jsonEndIndex).trim(); // Extract the string value and remove any leading/trailing whitespace
            console.log(` TAT value ${valueString}`); // Output: "Total time: 1.250697 seconds"
            // const match = valueString.match(/Total time: (\d+\.\d+) seconds/);
            const match = valueString.match(/(\d+\.\d+) seconds/);
            let totalTime ;
            if (match) {
              totalTime = match[1];
              console.log(`TAT new value: ${totalTime}`); // Output: 1.250697
            }
  
            resolve();
          });
        });
      });
  
      await streamPromise;
    }
  
    conn.end(); // Close the connection after all scripts are executed
  }

  async function executeScriptsnew2(scripts) {
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD 
    };
    
    const conn = new Client();
    
    conn.on('ready', function() {
      console.log('SSH connection established.');
    
      // Execute each script
      scripts.forEach(async script => {
        console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
    
        await conn.exec(`sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, function (err, stream) {
          if (err) throw err;
  
          let output = '';
          stream.on('data', data => output += data.toString());
          stream.on('end', function () {
            console.log(`Script output: ${output}`);
            // Do something with the output
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
            }


          });
        });
      });
    
      conn.end(); // Close the connection after all scripts are executed
    });
    
    conn.on('error', function(err) {
      console.log('SSH connection error: ' + err);
    });
  
    conn.on('close', function() {
      console.log('SSH connection closed.');
    });
  
    conn.connect(connSettings);
  }


  async function executeScriptsd2(scripts) {
    const extraOpts = {
        allowHalfOpen: false
      };
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
     // allowHalfOpen: false, // set allowHalfOpen to false,
     tryKeyboard: true,
      ...extraOpts
    };
  
    const conn = new Client();
  
    conn.on('ready', function () {
      console.log('SSH connection established.');
  
      // Execute each script
      scripts.forEach(async (script) => {
        console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
  
        try {
          const stream = await conn.exec(
            `sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`,
            //extraOpts
          );
  
          let output = '';
          stream.on('data', (data) => (output += data.toString()));
          stream.on('end', function () {
            console.log(`Script output: ${output}`);
            // Do something with the output
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
            }

          });
        } catch (err) {
          console.error(`Error executing script: ${script.script}`, err);
        }
      });
  
      conn.end(); // Close the connection after all scripts are executed
    });
  
    conn.connect(connSettings);
  }


  async function executePromiseScripts(scripts) {
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      allowHalfOpen: false
    };
    
    const conn = new Client();
    
    conn.on('ready', function() {
      console.log('SSH connection established.');
    
      // Execute each script
      scripts.forEach(async script => {
        console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
    
        await new Promise((resolve, reject) => {
            
          conn.exec(`sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, function (err, stream) {
            if (err) {
              console.log(`Error executing script: ${err}`);
              reject(err);
            }
            
            let output = '';
            stream.on('data', data => output += data.toString());
            stream.on('end', function () {
              console.log(`Script output: ${output}`);
              // Do something with the output
              const jsonStartIndex = output.indexOf('{');
              const jsonEndIndex = output.lastIndexOf('}') + 1;
              const jsonString = output.slice(jsonStartIndex, jsonEndIndex);
              const valueString = output.substring(jsonEndIndex).trim(); // Extract the string value and remove any leading/trailing whitespace
              console.log(` TAT value ${valueString}`); // Output: "Total time: 1.250697 seconds"
              // const match = valueString.match(/Total time: (\d+\.\d+) seconds/);
              const match = valueString.match(/(\d+\.\d+) seconds/);
              let totalTime ;
              if (match) {
                totalTime = match[1];
                console.log(`TAT new value: ${totalTime}`); // Output: 1.250697
              }
              resolve();
            });
          });

        });
      });
    
      conn.end(); // Close the connection after all scripts are executed
    });
    
    conn.connect(connSettings);
  }


  async function executeScriptsnes2(scripts) {
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD 
    };
    
    const conn = new Client();
    
    conn.on('ready', function() {
      console.log('SSH connection established.');
    
      // Execute each script
      scripts.forEach(async script => {
        console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
        try {
          const stream = await conn.exec(`sh ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, { 
            allowHalfOpen: false 
          });
          let output = '';
          stream.on('data', data => output += data.toString());
          stream.on('end', function () {
            console.log(`Script output: ${output}`);
            try {
              // Do something with the output
              if (!output.trim()) {
                console.log('Script output is empty');
              }else{
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
              }

              //end
            }

            } catch (err) {
              console.log(`Error processing output: ${err.message}`);
            }
          });
        } catch (err) {
          console.log(`Error executing script: ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} ${err.message}`);
        }
      });
    
      conn.end(); // Close the connection after all scripts are executed
    });
    conn.on('error', function(err) {
        console.log(`Connection error: ${err.message}`);
      });
    conn.connect(connSettings);
  }



  async function executeScriptsnesd2(scripts, cb) {
    const connSettings = {
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      strictVendor: false,
      hostVerifier: () => true
    };
    
    const conn = new Client();
    
    conn.on('ready', function() {
      console.log('SSH connection established.');
    
      // Execute each script
      scripts.forEach(async script => {
        console.log(`Executing script:${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} `);
        try {
          const stream = await conn.exec(`bash ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, { 
            allowHalfOpen: false 
          }, function (err, stream) {
            if (err) {
              cb(new Error(`Error executing script: ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} ${err.message}`));
              return conn.end();
            }
            let had_err = false;
            stream.on('error', function(err) {
              console.log(`Error occurred during stream: ${err.message}`);
              had_err = true;
            });
            let output = '';
            stream.on('data', data => output += data.toString());
            stream.on('end', async function () {
              console.log(`Script output: ${output}`);
              try {
                // Do something with the output
                if (!output.trim()) {
                    console.log('Script output is empty');
                  }else{
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
                }
                try {
                    const jsonObject2 = JSON.parse(jsonString);
                    console.log('JSON is valid');
                    console.log(jsonObject2);
                    const statusMessage = jsonObject2.statusMessage;
                    console.log(`status message ${statusMessage}`);
                    const messages = jsonObject2.result.message;
                    console.log(`response message ${messages}`);
                    let post = new Post(script.afifliate, script.affcode, totalTime, statusMessage, script.transtype, messages);
                    post = await post.save();
                    console.log(post);
                  } catch (error) {
                    console.log('JSON is not valid');
                    let post = new Post(script.afifliate, script.affcode, totalTime, "Time out",script.transtype, "Time out");
                    post = await post.save();
                    console.log(post);
                  }
                
            
            }
                cb(had_err !== true ? null : new Error('Unable to exec'), output);
              } catch (err) {
                console.log(`Error processing output: ${err.message}`);
                cb(err);
              }
            });
          });
        } catch (err) {
          console.log(`Error executing script: ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')} ${err.message}`);
          cb(err);
        }
      });
    
      conn.end(); // Close the connection after all scripts are executed
    });
    conn.on('error', function(err) {
        console.log(`Connection error: ${err.message}`);
        cb(err);
      });
    conn.connect(connSettings);
  }

  function newConst(scripts){
    conn.on('ready', function() {
        console.log('Client :: ready');
      
    
      
        scripts.forEach(async (script) => {
            console.log(` loggin : ${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`)
        await  conn.exec(`${process.env.HOSTPATH}${script.script} ${script.params.join(' ')}`, function(err, stream) {
            if (err) throw err;
            stream.on('close', function(code, signal) {
              console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
              conn.end();
            }).on('data', function(data) {
              console.log('STDOUT: ' + data);
            }).stderr.on('data', function(data) {
              console.log('STDERR: ' + data);
            });
          });
        });
      }).connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD 
      });
  }



  module.exports ={
    executeScripts,
    executeScripts2,
    newConst,
    executeScriptsNew,
    executeScriptsnew2,
    executeScriptsd2,
    executePromiseScripts,
    executeScriptsnes2,
    executeScriptsnesd2
  }