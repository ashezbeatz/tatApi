const CronJob = require("node-cron");
require("dotenv").config();
const mathFunctions = require('../shhconnection/sshRequest')
exports.initScheduledJobs = () => {
    const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
      console.log("I'm executed on a schedule!");
          const sum = mathFunctions.addNumbers(2, 3);
    const product = mathFunctions.multiplyNumbers(2, 3);

    console.log(sum)
    console.log(product)
  // const contes = mathFunctions.connectSSH();
  // console.log(contes)
      // Add your custom logic here
    });
  
   // scheduledJobFunction.start();
  }