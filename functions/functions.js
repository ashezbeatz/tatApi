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

     // console.log(arrayFunc(process.env.BAL_ML_PAYLOAD));
      //ENG
 /*      await Promise.all([
     myFunctions.newgetSSHScript(process.env.BAL_ENG_PATH,arrayFunc(process.env.BAL_ENG_PAYLOAD),process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance'),
      

        //EGH
   myFunctions.newgetSSHScript(process.env.BAL_EGH_PATH,arrayFunc(process.env.BAL_EGH_PAYLOAD),process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance')
//
      ])*/

      
      await  myFunctions.newgetddSSHScript(process.env.BAL_ENG_PATH,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance')
        
        //AWA
      await  myFunctions.newgetddSSHScript(process.env.BAL_EGH_PATH,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_EGM_PATH,arrayFunc(process.env.BAL_EGM_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_ESL_PATH,arrayFunc(process.env.BAL_ESL_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'balance')
      //await  myFunctions.newgetddSSHScript(process.env.BAL_EGM_PATH,arrayFunc(process.env.BAL_EGM_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'balance')
  
     
     
      //FWA
      await  myFunctions.newgetddSSHScript(process.env.BAL_ML_PATH,arrayFunc(process.env.BAL_ML_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_BF_PATH,arrayFunc(process.env.BAL_BF_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_CI_PATH,arrayFunc(process.env.BAL_CI_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_SN_PATH,arrayFunc(process.env.BAL_SN_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_ENE_PATH,arrayFunc(process.env.BAL_ENE_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_EBJ_PATH,arrayFunc(process.env.BAL_EBJ_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_ETG_PATH,arrayFunc(process.env.BAL_ETG_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'balance')
      await  myFunctions.newgetddSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'balance')
     
 
 
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
     
    //AWA
    //EGH
    myFunctions.newgetddSSHScript(process.env.check_FCP_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_gambia,arrayFunc(process.env.check_FCP_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_liberia,arrayFunc(process.env.check_FCP_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_serria,arrayFunc(process.env.check_FCP_serria_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'FCP'),
   

    ///fwa
    myFunctions.newgetddSSHScript(process.env.check_FCP_mali,arrayFunc(process.env.check_FCP_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_burkina,arrayFunc(process.env.check_FCP_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_cote,arrayFunc(process.env.check_FCP_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_niger,arrayFunc(process.env.check_FCP_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_benin,arrayFunc(process.env.check_FCP_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'FCP'),
    myFunctions.newgetddSSHScript(process.env.check_FCP_togo,arrayFunc(process.env.check_FCP_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'FCP')
    //myFunctions.newgetddSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'FCP')
   
  ]);
}

async function getMNOs(){
  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'MNOs'),
        
    //awa
    //EGH
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_gambia,arrayFunc(process.env.fetch_MNOs_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_laberia,arrayFunc(process.env.fetch_MNOs_laberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_seria,arrayFunc(process.env.fetch_MNOs_seria_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'MNOs'),
   
///fwa
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_mali,arrayFunc(process.env.fetch_MNOs_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_burkina,arrayFunc(process.env.fetch_MNOs_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_cote,arrayFunc(process.env.fetch_MNOs_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_senegal,arrayFunc(process.env.fetch_MNOs_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_niger,arrayFunc(process.env.fetch_MNOs_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_benin,arrayFunc(process.env.fetch_MNOs_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'MNOs'),
    myFunctions.newgetddSSHScript(process.env.fetch_MNOs_togo,arrayFunc(process.env.fetch_MNOs_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'MNOs'),
    

  ]);
}


async function getLocalBanks(){

  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'local_banks'),
        
    //awa
    //EGH
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_gambia,arrayFunc(process.env.fetch_local_banks_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_liberia,arrayFunc(process.env.fetch_local_banks_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_sirrea,arrayFunc(process.env.fetch_local_banks_sirrea_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'local_banks'),
   

 //fwa 
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_mali,arrayFunc(process.env.fetch_local_banks_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_burkina,arrayFunc(process.env.fetch_local_banks_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_cote,arrayFunc(process.env.fetch_local_banks_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_senegal,arrayFunc(process.env.fetch_local_banks_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_niger,arrayFunc(process.env.fetch_local_banks_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_benin,arrayFunc(process.env.fetch_local_banks_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'local_banks'),
    myFunctions.newgetddSSHScript(process.env.fetch_local_banks_togo,arrayFunc(process.env.fetch_local_banks_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'local_banks'),
  


  ])
}
// //getBalanace()


async function getFetchCharges(){

  const myArrayENG =['ng','2348068998308','ENG','"059100XXXX67 - NGN SAV"'];
  const myArrayEGH =['gh','233244224424','EGH','XPRESS'];
  await Promise.all([
  myFunctions.newgetddSSHScript(process.env.fetch_charges_ghana,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'fetch_charges'),
        
 ///awa
  //EGH
  myFunctions.newgetddSSHScript(process.env.fetch_charges_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_local_banks_gambia,arrayFunc(process.env.fetch_local_banks_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'local_banks'),
  myFunctions.newgetddSSHScript(process.env.fetch_local_banks_liberia,arrayFunc(process.env.fetch_local_banks_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'local_banks'),
  myFunctions.newgetddSSHScript(process.env.fetch_local_banks_sirrea,arrayFunc(process.env.fetch_local_banks_sirrea_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'local_banks'),
 
  //fwa

  myFunctions.newgetddSSHScript(process.env.fetch_charges_mali,arrayFunc(process.env.fetch_charges_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_burkina,arrayFunc(process.env.fetch_charges_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_cote,arrayFunc(process.env.fetch_charges_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_senegal,arrayFunc(process.env.fetch_charges_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_niger,arrayFunc(process.env.fetch_charges_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_benin,arrayFunc(process.env.fetch_charges_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'fetch_charges'),
  myFunctions.newgetddSSHScript(process.env.fetch_charges_togo,arrayFunc(process.env.fetch_charges_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'fetch_charges'),
  
  

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