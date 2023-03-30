
const Post = require('../models/models');
const { createConnection }   = require('../shhconnection/mynewSHH');
require("dotenv").config();
let session = null;

async function getSession() {
  if (!session) {
    try {
      session = await createConnection();
    } catch (err) {
      console.error('Error creating SSH connection:', err);
    }
  }
  return session;
}

async function runShellScriptsBalance(scripts) {
   
    const session = await getSession();
    if (!session) {
      console.error('Error establishing SSH connection');
      return;
    }
   
        // Loop through the scripts array and execute each script
  scripts.forEach(async (script) => {
    console.log(`${script.script} ${script.params.join(' ')}`);
   /* session.conn.exec(`bash ${script.script} ${script.params.join(' ')}`, (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        console.log(`SSH command exited with code ${code} and signal ${signal}`);
        session.conn.end();
      }).on('data', (data) => {
        console.log(`STDOUT: ${data}`);

      }).stderr.on('data', (data) => {
        console.log(`STDERR: ${data}`);

      });
    });
 */
//  { script: `${process.env.fetch_charges_gn}`, params: arrayFunc(process.env.fetch_charges_gn_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGN,affcode:process.env.AFFILIATE_CODE_EGN,transtype:'fetch_charges'  },
        

    try {
        const stream = await session.conn.exec(`bash ${script.script} ${script.params.join(' ')}`);
        stream.on('data', function(data) {
          console.log('STDOUT: ' + data);
          output += data;
        }).stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        }).on('close', async function(code) {
          console.log('Script exited with code ' + code);
          // ... the rest of your code
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
            let post = new Post(script.afifliate, script.affcode, totalTime, statusMessage, script.transtype, messages);
            post = await post.save();
            console.log(post);
          } catch (error) {
            console.log('JSON is not valid');
            // console.log(jsonString);
            let post = new Post(script.afifliate, script.affcode, totalTime, "Time out",script.transtype, "Time out");
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
        

          //conn.end();
          //resolve();
        });
      } catch (err) {
        console.log('Error executing command:', err);
        reject(err);
      }

});
      
}







function arrayFunc(data){
    var festivals = data.split(", ");
  
    return festivals;
  }




module.exports = {

    runShellScriptsBalance
}