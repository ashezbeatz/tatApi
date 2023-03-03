const Post = require('../models/models')
const mathFunctions = require('../shhconnection/sshRequest');

const myFunctions  = require('../shhconnection/newssh');

require("dotenv").config();

async function getBalanace(){

    console.log(`payload path ${process.env.BAL_ENG_PATH}`)
      console.log(`payload array ${process.env.BAL_ENG_PAYLOAD}`) 

      console.log(`payload path ${process.env.BAL_EGH_PATH}`)
      console.log(`payload array ${process.env.BAL_EGH_PAYLOAD}`) 
     // const myArrayENG =['cm','ECM','237670000000','059100XXXX67 - NGN SAV','080808'];
      const myArrayENG =['ng','ENG','2348068998308','"059100XXXX67 - NGN SAV"','271400'];
      const myArrayEGH =['gh','EGH','233244224424','XPRESS','080809'];
      //ENG
 /*      await Promise.all([
     myFunctions.newgetSSHScript(process.env.BAL_ENG_PATH,arrayFunc(process.env.BAL_ENG_PAYLOAD),process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance'),
        

        //EGH
   myFunctions.newgetSSHScript(process.env.BAL_EGH_PATH,arrayFunc(process.env.BAL_EGH_PAYLOAD),process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance')
//
      ])*/
      await  myFunctions.newgetddSSHScript(process.env.BAL_ENG_PATH,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance')
        

   await  myFunctions.newgetddSSHScript(process.env.BAL_EGH_PATH,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance')
  /* await   myFunctions.newgetSSHScript(process.env.BAL_ENG_PATH,arrayFunc(process.env.BAL_ENG_PAYLOAD),process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance')
  .then(() => {
    return myFunctions.newgetSSHScript(process.env.BAL_EGH_PATH,arrayFunc(process.env.BAL_EGH_PAYLOAD),process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance');
  })
  .then(() => {
    console.log('Both functions completed successfully!');
  })
  .catch((err) => {
    console.log('An error occurred:', err);
  });*/

  /*const firstPromise = new Promise(async (resolve, reject) => {
    try {
      await myFunctions.newgetSSHScript(process.env.BAL_ENG_PATH,arrayFunc(process.env.BAL_ENG_PAYLOAD),process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance');
      resolve();
    } catch (err) {
      reject(err);
    }
  });

  const secondPromise = new Promise(async (resolve, reject) => {
    try {
      await myFunctions.newgetSSHScript(process.env.BAL_EGH_PATH,arrayFunc(process.env.BAL_EGH_PAYLOAD),process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance');
      resolve();
    } catch (err) {
      reject(err);
    }
  });

  await Promise.all([firstPromise, secondPromise]); */

}


async function getFCP(){
  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddSSHScript(process.env.check_FCP_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'FCP'),
        
    //EGH
    myFunctions.newgetddSSHScript(process.env.check_FCP_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'FCP')
  ]);
}

async function getMNOs(){
  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'MNOs'),
        

    //EGH
 myFunctions.newgetddSSHScript(process.env.fetch_MNOs_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'MNOs')
  ]);
}


async function getLocalBanks(){

  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'local_banks'),
        

    //EGH
 myFunctions.newgetddSSHScript(process.env.fetch_MNOs_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'local_banks')
  ])
}
// //getBalanace()


async function getFetchCharges(){

  const myArrayENG =['ng','2348068998308','ENG','"059100XXXX67 - NGN SAV"'];
  const myArrayEGH =['gh','233244224424','EGH','XPRESS'];
  await Promise.all([
  myFunctions.newgetddSSHScript(process.env.fetch_MNOs_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'fetch_charges'),
        

  //EGH
myFunctions.newgetddSSHScript(process.env.fetch_MNOs_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'fetch_charges  ')
  ])
}


function arrayFunc(data){
  var festivals = data.split(", ");

  return festivals;
}
module.exports = {
  arrayFunc :arrayFunc,
  getBalanace : getBalanace,
  getFCP : getFCP,
  getMNOs : getMNOs,
  getLocalBanks : getLocalBanks,
  getFetchCharges : getFetchCharges

  };  