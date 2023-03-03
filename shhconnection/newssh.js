//const Client = require('ssh2-sftp-client');
const { Client } = require('ssh2');
require("dotenv").config();
const Post = require('../models/models');
const util = require('util');





  async function newgetSSHScript(path,arrysLists,afifliate,affcode,transtype){
    const conn = new Client();

    await conn.on('ready', async function() {
  console.log('Client :: ready');
  const paths = process.env.HOSTPATH+path ///path/to/your/script.sh
  console.log('paths ',paths);
  console.log('params ',arrysLists);
  const scriptArgs = arrysLists;
  // Execute a shell command with parameters
  await conn.exec(`bash ${paths} ${scriptArgs.join(' ')}`, async function(err, stream) {
    if (err) throw err;

    let output = '';

    // Handle the output of the shell script
    await stream.on('data', function(data) {
      console.log('STDOUT: ' + data);
      output += data;
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    }).on('close', async function(code) {
      console.log('Script exited with code ' + code);

     
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
    
    try {
      const jsonObject2 = JSON.parse(jsonString);
      console.log('JSON is valid');
      console.log(jsonObject2);
      const statusMessage = jsonObject2.statusMessage;
      console.log(`status message ${statusMessage}`);
      const messages = jsonObject2.result.message;
      console.log(`response message ${messages}`);
      let post = new Post(afifliate,affcode,totalTime,statusMessage,transtype,messages);
      post = await post.save();
      console.log(post);
    } catch (error) {
      console.log('JSON is not valid');
     // console.log(jsonString);
     let post = new Post(afifliate,affcode,totalTime,"Time out",transtype,"Time out");
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
   
      // Close the SSH connection
      conn.end();
    });
  });
}).connect({
  host: process.env.HOST,
  port: process.env.SSHPORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  strictVendor: false,
  hostVerifier: () => true
});


  }




  async function SSHScriptmys(path, arrysLists, afifliate, affcode, transtype) {
    const conn = new Client();
  
    await util.promisify(conn.on).bind(conn)('ready');
  
    console.log('Client :: ready');
    const paths = process.env.HOSTPATH + path; ///path/to/your/script.sh
    console.log('paths ', paths);
    console.log('params ', arrysLists);
    const scriptArgs = arrysLists;
    // Execute a shell command with parameters
    const execPromise = util.promisify(conn.exec).bind(conn);
    const stream = await execPromise(`bash ${paths} ${scriptArgs.join(' ')}`);
  
    let output = '';
  
    // Handle the output of the shell script
    stream.on('data', function (data) {
      console.log('STDOUT: ' + data);
      output += data;
    }).stderr.on('data', function (data) {
      console.log('STDERR: ' + data);
    });
  
    await util.promisify(stream.on).bind(stream)('close');
  
    console.log('Script exited with code ' + stream.exitCode);
  
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
  
    try {
      const jsonObject = JSON.parse(output);
      console.log('Output is valid JSON');
      console.log(jsonObject);
    } catch (error) {
      console.log('Output is not valid JSON');
    }
  
    // Close the SSH connection
    conn.end();
  
  
    conn.connect({
      host: process.env.HOST,
      port: process.env.SSHPORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      strictVendor: false,
      hostVerifier: () => true
    });
  }
  


  async function newgetddSSHScript(path, arrysLists, afifliate, affcode, transtype) {
    return new Promise((resolve, reject) => {
      const conn = new Client();
        // Add an error listener to the Client instance
    conn.on('error', (err) => {
      console.error('An error occurred:', err);
      reject(err);
    });
      conn.on('ready', async function() {
        console.log('Client :: ready');
        const paths = process.env.HOSTPATH + path ///path/to/your/script.sh
        console.log('paths ', paths);
        console.log('params ', arrysLists);
        const scriptArgs = arrysLists;
        console.log("arry join "+scriptArgs.join(' '))
        // Execute a shell command with parameters bash sh -x  sh -x 
        try{
        await conn.exec(`bash ${paths} ${scriptArgs.join(' ')}`, function(err, stream) {
          if (err) reject(err);
  
          let output = '';
  
          // Handle the output of the shell script
          stream.on('data', function(data) {
            console.log('STDOUT: ' + data);
            output += data;
          }).stderr.on('data', function(data) {
            console.log('STDERR: ' + data);
          }).on('close', async function(code) {
            console.log('Script exited with code ' + code);
  
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
              let post = new Post(afifliate, affcode, totalTime, statusMessage, transtype, messages);
              post = await post.save();
              console.log(post);
            } catch (error) {
              console.log('JSON is not valid');
            //   console.log(jsonString);
              let post = new Post(afifliate, affcode, totalTime, "Time out", transtype, "Time out");
              post = await post.save();
              console.log(post);
            }
  
            try {
              const jsonObject = JSON.parse(output);
              console.log('Output is valid JSON');
              console.log(jsonObject);
            } catch (error) {
              console.log('Output is not valid JSON '+output);

            }
  
            // Close the SSH connection
            conn.end();
  
            // Resolve the Promise
            resolve();
          });
        }  );
        //end
      }catch (err) {
        console.log('Error executing command:', err);
        reject(err);
      }
      
      }).connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        strictVendor: false,
        hostVerifier: () => true
      });
    });
  }


  


  // Export the functions
  module.exports = {
    
   // getFileFromSftp : getFileFromSftp,
    newgetSSHScript : newgetSSHScript,
    SSHScriptmys : SSHScriptmys,
    newgetddSSHScript : newgetddSSHScript
   
  }; 