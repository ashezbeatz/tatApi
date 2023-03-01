//const Client = require('ssh2-sftp-client');
const { Client } = require('ssh2');
require("dotenv").config();
const Post = require('../models/models');

/*async function getFileFromSftp() {
    const config = {
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        
    };
  
    const client = new Client();
  
    try {
      await client.connect(config);
      console.log('SFTP connection established.');
  
      const remoteFilePath = '/remote/path/to/file.txt';
      const localFilePath = '/local/path/to/file.txt';
  
     // await client.get(remoteFilePath, localFilePath);
     // console.log(`File retrieved from ${remoteFilePath} to ${localFilePath}.`);
    } catch (err) {
      console.error(err.message);
    } finally {
      await client.end();
      console.log('SFTP connection closed.');
    }
  }


*/



  function newgetSSHScript(path,arrysLists,afifliate,affcode,transtype){
    const conn = new Client();

conn.on('ready', function() {
  console.log('Client :: ready');
  const paths = process.env.HOSTPATH+path ///path/to/your/script.sh
  console.log('paths ',paths);
  console.log('params ',arrysLists);
  const scriptArgs = arrysLists;
  // Execute a shell command with parameters
  conn.exec(`bash ${paths} ${scriptArgs.join(' ')}`, function(err, stream) {
    if (err) throw err;

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
      //console.log("response out : "+output);
     /// getdatas(output);

    //  const responsePayload = `${output}`
    //   console.log("new payload :" +responsePayload);

    //   const lastString = responsePayload.slice(responsePayload.lastIndexOf('\n') + 1);
    //   console.log(`LAst String : ${lastString}`);
     /*    const totalTimeRegex = `/^Total time: ([0-9.]+) seconds/m`;
      const totalTimeMatch = responsePayload.match(totalTimeRegex);
        console.log(`New TAT ${totalTimeMatch} times`)
      if (totalTimeMatch) {
        const totalTime = totalTimeMatch[1];
        console.log(`Total new times: ${totalTime} seconds`);
      }

      // const match = responsePayload.match(/Total time: (\d+\.\d+) seconds/);
      // if (match) {
      //   const totalTime = match[1];
      //   console.log(`less total time ${totalTime}`); // Output: 1.250697
      // }
   const regex = /Total time: (\d+\.\d+) seconds/g;
      let match;
      while ((match = regex.exec(responsePayload)) !== null) {
          console.log(`less total time ${match[0]}`);
      }*/
    
    
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





  


  // Export the functions
  module.exports = {
    
   // getFileFromSftp : getFileFromSftp,
    newgetSSHScript : newgetSSHScript
  }; 