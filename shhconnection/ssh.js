
const { Client } = require('ssh2');
require("dotenv").config();
const conn = new Client();


 function pushData(param1,param2){
    console.log("fdsfdfsd")
    conn.on('ready', function() {
        console.log('Client :: ready');
        const scriptArgs = param2; // pass parameters as an array['arg1', 'arg2', 'arg3']
        conn.exec(`bash ${process.env.PATH}/${param1} ${scriptArgs.join(' ')}`, function(err, stream) {
          if (err) throw err;
          stream.on('close', function(code, signal) {
            console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
            conn.end();
          }).on('data', function(data) {
            console.log('STDOUT: ' + data);
            // here you can return the data to your Node.js application
          }).stderr.on('data', function(data) {
            console.log('STDERR: ' + data);
          });
        });
      }).connect({
        host: process.env.HOST,
        port: process.env.SSHPORT,
        username: process.env.USERNAME,
       // privateKey: require('fs').readFileSync('/path/to/private/key')
       password: process.env.PASS
      });
      return "Mdatas"
    }


    function myData(){
        return "asddsd";
    }

module.export ={
    pushData: pushData
}