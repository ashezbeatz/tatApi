var express = require('express');
var cors = require('cors')
const http = require('http');
require("dotenv").config();
const cron = require('node-cron');
const scheduledFunctions = require('./cron');
const fs = require('fs');
const indexRoute = require('./routes')
const homeRoute = require('./routes/home')
const logerfunc = require('./functions/functions')

///const  shhclas = require('./shhconnection/ssh')//
const mathFunctions = require('./shhconnection/sshRequest');

//const newSftps = require('./shhconnection/newssh')

var app = express();
app.use(cors());


app.use(indexRoute)
app.use(homeRoute)

// app.get('/', function (req, res) {
    
//     const myArray =['cm','ECM','237670000000','XPRESS',080808];
//     const paths = '/check_BE_AWS_CESA2_new.sh';
  
//    const sum = mathFunctions.addNumbers(2, 3);
// const product = mathFunctions.multiplyNumbers(2, 3);
// //const sende = mathFunctions.getSSHRequest(paths,myArray)

// //const contes = mathFunctions.connectSSH();
// //mathFunctions.connectSSH();
// newSftps.getFileFromSftp();

// console.log(sum); // Output: 5
// console.log(product); 
// //console.log(sende)
   

//   res.send('Hello World! ');
// });
//scheduledFunctions.initScheduledJobs();
const port = process.env.PORT || 3000;

//listenOnPort(port);
app.listen(port, function () {
  console.log(`App running @ port: ${port}`);
 
   /* var task =cron.schedule(' * * * * * *', ()=>{
        console.log("Task has submited successfully")
       // logerfunc.getFetchCharges()
      // app.use(indexRoute)
      // const sum = mathFunctions.addNumbers(2, 3);
    //  console.log(sum)
   // logerfunc.getBalanace();
    logerfunc.getBalanace();
    logerfunc.getFCP();
    logerfunc.getLocalBanks();
    logerfunc.getMNOs();
    logerfunc.getFetchCharges();
      console.log ( '[' + new Date().toISOString().substring(11,23) + '] -')
  //const contes = mathFunctions.connectSSH();
    //  console.log(contes)
    });*/
  // setTimeout(()=>{
  //   task.start()
  // }, 2000)

  // setTimeout(()=>{
  //   task.stop()
  // }, 5000)

});
