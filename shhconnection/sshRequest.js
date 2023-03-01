
const { Client } = require('ssh2');
const ssh = require('ssh2');
require("dotenv").config();

function addNumbers(a, b) {
    return a + b;
  }
  
  function multiplyNumbers(a, b) {
    return a * b;
  }
  
  function checkData(){
    const responsePayload = `strict-transport-security: max-age=15724800; includeSubDomains
    x-frame-options: DENY
    x-xss-protection: 1 ; mode=block
    referrer-policy: no-referrer
    
    {"statusCode":5000,"statusMessage":"Your Transaction Request is Successful and Approved","result":{"message":"Dear test mobileapp, your balance as of Fri Feb 24 15:46:16 GMT 2023 is GHS 0 . ","referenceID":"59563994","data":[{"date":"2023-02-24","accountAlias":"XPRESS","balance":"0","limitAmount":"5000","currency":"GHS","accountNumber":"30180047975","availableBalance":"-23820"}]}} Total time: 1.217636 seconds`;
    
    const executionTimeRegex = /Total time: (\d+\.\d+) seconds/;
    const match = responsePayload.match(executionTimeRegex);
    
    if (match) {
      const executionTime = parseFloat(match[1]);
      console.log(`Execution time: ${executionTime} seconds`);
    } else {
      console.log('Execution time not found');
    }


  }



  function getSSHRequest(path,arrysLists){
    const conn = new Client();
    let mydata ='';
   // const regex = '/{.*}/s';
   // const jsonRegex = '/{[^]*}/';
conn.on('ready', function() {
    console.log('Client :: ready');
    const paths = process.env.HOSTPATH+path ///path/to/your/script.sh
    console.log('paths ',paths);
    console.log('params ',arrysLists);
    const scriptArgs = arrysLists; // ['arg1', 'arg2', 'arg3']pass parameters as an array
    conn.exec(`bash ${paths} ${scriptArgs.join(' ')}`, function(err, stream) {
      if (err) throw err;
      let output = '';
      stream.on('close', function(code, signal) {
        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
        conn.end();
      }).on('data', function(data) {
       console.log('STDOUT: ' + data);
       output += data;
      //  mydata ='STDOUT: ' + data
      /* let jsonString = data.match(regex)[0];
        let jsonString2 = data.match(jsonRegex)[0];
        const result = JSON.parse(jsonString);
        const result2 = JSON.parse(jsonString2);
        console.log("json response",result);
         console.log("json response 2",result2);*/
        // here you can return the data to your Node.js application
       /* const [headers, datas] = data.split('\n\n'); // split the output into headers and data
        const response = { headers: {}, mdata: {} };

      headers.split('\n').forEach(header => { // parse the headers into an object
        const [key, value] = header.split(': ');
        response.headers[key] = value;
      });
      response.mdata = JSON.parse(datas); // parse the data as JSON
      console.log(response); // log the response object*/

      }).stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
       // mydata = 'STDERR: ' + data
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
  //return mydata;
  }




  function newgetSSHScrip(path,arrysLists){
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
    }).on('close', function(code) {
      console.log('Script exited with code ' + code);

      // Parse the output as JSON
     // const response = JSON.parse(output);
    //  console.log("response : "+response);
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
      // Step 3: Check if statusMessage contains the word "Successful"
        // const isSuccessful = statusMessage.includes('Successful');
        // console.log(`status message sucesss ${isSuccessful}`);

      // const index = output.indexOf('Successful');
      // const successfulStr = output.substring(index, index+10);
      // console.log(`status message ${successfulStr}`);
    } catch (error) {
      console.log('JSON is not valid');
     // console.log(jsonString);
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



  


  function connectSSH(){
    const conn = new ssh.Client();
    const das = "";
  conn.on('ready', () => {
    console.log('SSH connection established.');
   return 'SSH connection established.';
    conn.end();
  }).connect({
    host: process.env.HOST,
    port: process.env.SSHPORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    strictVendor: false,
    //hostVerifier: () => true
  });
 // return das
  }

function debugs(){
  //const conn = new ssh();
  const conn = new Client();
conn.on('debug', (msg) => {
  console.log('DEBUG:', msg);
});

conn.connect({
  host: process.env.HOST,
  port: process.env.SSHPORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  strictVendor: false
});

}

  // Export the functions
  module.exports = {
    addNumbers: addNumbers,
    multiplyNumbers: multiplyNumbers,
    getSSHRequest : getSSHRequest,
    connectSSH : connectSSH,
    debugs : debugs,
    checkData :checkData,
    newgetSSHScrip : newgetSSHScrip
  };  