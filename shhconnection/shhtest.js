const Post = require('../models/models');

function multiplyNumbers(a, b) {
    return a * b;
  }
async function pushDataTest(){
    const payload = `Total time: 0.000000 seconds
    HTTP/2 200
    date: Mon, 27 Feb 2023 19:20:08 GMT
    content-type: application/json; charset=UTF-8
    content-length: 383
    vary: Origin
    vary: Access-Control-Request-Method
    vary: Access-Control-Request-Headers
    cache-control: no-cache, no-store, max-age=0, must-revalidate
    pragma: no-cache
    expires: 0
    x-content-type-options: nosniff
    strict-transport-security: max-age=15724800; includeSubDomains
    x-frame-options: DENY
    x-xss-protection: 1 ; mode=block
    referrer-policy: no-referrer
    
    {"statusCode":5000,"statusMessage":"Your Transaction Request is Successful and Approved","result":{"message":"Dear test mobileapp, your balance as of Mon Feb 27 19:20:08 GMT 2023 is GHS 0 . ","referenceID":"59639775","data":[{"date":"2023-02-27","accountAlias":"XPRESS","balance":"0","limitAmount":"5000","currency":"GHS","accountNumber":"30180047975","availableBalance":"-23820"}]}} Total time: 1.250697 seconds
    Success - Balance Retrieved`;
    
    const jsonPayload = payload.substring(payload.indexOf('{'), payload.lastIndexOf('}') + 1);
    const valueString = payload.substring(payload.lastIndexOf('}') + 1).trim(); // Extract the string value and remove any leading/trailing whitespace
    console.log(` TAT value ${valueString}`); // Output: "Total time: 1.250697 seconds"
     const match = valueString.match(/(\d+\.\d+) seconds/);
     let totalTime
        if (match) {
           totalTime = match[1];
          console.log(`TAT new value: ${totalTime}`); // Output: 1.250697
        }
    const obj = JSON.parse(jsonPayload);
    const statMessage = obj.statusMessage
    const message = obj.result.message;
    
    console.log(message,statMessage);

    let post = new Post("ghana","egh",totalTime,statMessage,"balance",message);
    post = await post.save();
    console.log(post);

   // return post;    

}

//pushDataTest()

// module.export = { 
//     pushDataTest : pushDataTest,
//     multiplyNumbers : multiplyNumbers
// }

module.exports = {
    
    multiplyNumbers: multiplyNumbers,
    pushDataTest : pushDataTest
  };  