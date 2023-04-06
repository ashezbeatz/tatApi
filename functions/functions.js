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

      
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ENG_PATH,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance')
        
        //AWA
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGH_PATH,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGM_PATH,arrayFunc(process.env.BAL_EGM_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ESL_PATH,arrayFunc(process.env.BAL_ESL_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'balance')
      //await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGM_PATH,arrayFunc(process.env.BAL_EGM_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'balance')
  
     
     
      //FWA
      //await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ML_PATH,arrayFunc(process.env.BAL_ML_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_BF_PATH,arrayFunc(process.env.BAL_BF_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_CI_PATH,arrayFunc(process.env.BAL_CI_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_SN_PATH,arrayFunc(process.env.BAL_SN_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ENE_PATH,arrayFunc(process.env.BAL_ENE_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EBJ_PATH,arrayFunc(process.env.BAL_EBJ_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ETG_PATH,arrayFunc(process.env.BAL_ETG_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'balance')
     
        ///cesa 1

      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EKE_PATH,arrayFunc(process.env.BAL_EKE_PAYLOAD),process.env.AFFILIATE_EKE,process.env.AFFILIATE_CODE_EKE,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EUG_PATH,arrayFunc(process.env.BAL_EUG_PAYLOAD),process.env.AFFILIATE_EUG,process.env.AFFILIATE_CODE_EUG,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ETZ_PATH,arrayFunc(process.env.BAL_ETZ_PAYLOAD),process.env.AFFILIATE_ETZ,process.env.AFFILIATE_CODE_ETZ,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ERW_PATH,arrayFunc(process.env.BAL_ERW_PAYLOAD),process.env.AFFILIATE_ERW,process.env.AFFILIATE_CODE_ERW,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EMW_PATH,arrayFunc(process.env.BAL_EMW_PAYLOAD),process.env.AFFILIATE_EMW,process.env.AFFILIATE_CODE_EMW,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EZM_PATH,arrayFunc(process.env.BAL_EZM_PAYLOAD),process.env.AFFILIATE_EZM,process.env.AFFILIATE_CODE_EZM,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EZW_PATH,arrayFunc(process.env.BAL_EZW_PAYLOAD),process.env.AFFILIATE_EZW,process.env.AFFILIATE_CODE_EZW,'balance')  
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EMZ_PATH,arrayFunc(process.env.BAL_EMZ_PAYLOAD),process.env.AFFILIATE_EMZ,process.env.AFFILIATE_CODE_EMZ,'balance')
      ///await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'balance')
        
      ///cesa 2

      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ETD_PATH,arrayFunc(process.env.BAL_ETD_PAYLOAD),process.env.AFFILIATE_ETD,process.env.AFFILIATE_CODE_ETD,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EBI_PATH,arrayFunc(process.env.BAL_EBI_PAYLOAD),process.env.AFFILIATE_EBI,process.env.AFFILIATE_CODE_EBI,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGA_PATH,arrayFunc(process.env.BAL_EGA_PAYLOAD),process.env.AFFILIATE_EGA,process.env.AFFILIATE_CODE_EGA,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGQ_PATH,arrayFunc(process.env.BAL_EGQ_PAYLOAD),process.env.AFFILIATE_EGQ,process.env.AFFILIATE_CODE_EGQ,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ECM_PATH,arrayFunc(process.env.BAL_ECM_PAYLOAD),process.env.AFFILIATE_ECM,process.env.AFFILIATE_CODE_ECM,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ECD_PATH,arrayFunc(process.env.BAL_ECD_PAYLOAD),process.env.AFFILIATE_ECD,process.env.AFFILIATE_CODE_ECD,'balance')
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ECG_PATH,arrayFunc(process.env.BAL_ECG_PAYLOAD),process.env.AFFILIATE_ECG,process.env.AFFILIATE_CODE_ECG,'balance')  
      await  myFunctions.newgetddnewsSSHScript(process.env.BAL_ECV_PATH,arrayFunc(process.env.BAL_ECV_PAYLOAD),process.env.AFFILIATE_ECV,process.env.AFFILIATE_CODE_ECV,'balance')
      ///await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'balance')
     
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
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'FCP'),
     
    //AWA
    //EGH
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_gambia,arrayFunc(process.env.check_FCP_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_liberia,arrayFunc(process.env.check_FCP_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_serria,arrayFunc(process.env.check_FCP_serria_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'FCP'),
   

    ///fwa
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_mali,arrayFunc(process.env.check_FCP_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_burkina,arrayFunc(process.env.check_FCP_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_cote,arrayFunc(process.env.check_FCP_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_niger,arrayFunc(process.env.check_FCP_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_benin,arrayFunc(process.env.check_FCP_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'FCP'),
    myFunctions.newgetddnewsSSHScript(process.env.check_FCP_togo,arrayFunc(process.env.check_FCP_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'FCP'),
    //myFunctions.newgetddnewsSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'FCP')
   
  ///cesa 1

  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_kenya,arrayFunc(process.env.check_FCP_kenya_PAYLOAD),process.env.AFFILIATE_EKE,process.env.AFFILIATE_CODE_EKE,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_uganda,arrayFunc(process.env.check_FCP_uganda_PAYLOAD),process.env.AFFILIATE_EUG,process.env.AFFILIATE_CODE_EUG,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_tanzania,arrayFunc(process.env.check_FCP_tanzania_PAYLOAD),process.env.AFFILIATE_ETZ,process.env.AFFILIATE_CODE_ETZ,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_rwanda,arrayFunc(process.env.check_FCP_rwanda_PAYLOAD),process.env.AFFILIATE_ERW,process.env.AFFILIATE_CODE_ERW,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_malawi,arrayFunc(process.env.check_FCP_malawi_PAYLOAD),process.env.AFFILIATE_EMW,process.env.AFFILIATE_CODE_EMW,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_zambia,arrayFunc(process.env.check_FCP_zambia_PAYLOAD),process.env.AFFILIATE_EZM,process.env.AFFILIATE_CODE_EZM,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_zim,arrayFunc(process.env.check_FCP_zim_PAYLOAD),process.env.AFFILIATE_EZW,process.env.AFFILIATE_CODE_EZW,'FCP') ,  
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_sudan,arrayFunc(process.env.check_FCP_sudan_PAYLOAD),process.env.AFFILIATE_ESS,process.env.AFFILIATE_CODE_ESS,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_moz,arrayFunc(process.env.check_FCP_moz_PAYLOAD),process.env.AFFILIATE_EMZ,process.env.AFFILIATE_CODE_EMZ,'FCP'),
  ///await  myFunctions.newgetddnewsSSHScript(process.env.BAL_EGW_PATH,arrayFunc(process.env.BAL_EGW_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'balance')


   ///cesa 2

  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_chad,arrayFunc(process.env.check_FCP_chad_PAYLOAD),process.env.AFFILIATE_ETD,process.env.AFFILIATE_CODE_ETD,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_southtom,arrayFunc(process.env.check_FCP_southtom_PAYLOAD),process.env.AFFILIATE_EST,process.env.AFFILIATE_CODE_EST,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_burundi,arrayFunc(process.env.check_FCP_burundi_PAYLOAD),process.env.AFFILIATE_EBI,process.env.AFFILIATE_CODE_EBI,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_gabon,arrayFunc(process.env.check_FCP_gabon_PAYLOAD),process.env.AFFILIATE_EGA,process.env.AFFILIATE_CODE_EGA,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_egq,arrayFunc(process.env.check_FCP_egq_PAYLOAD),process.env.AFFILIATE_EGQ,process.env.AFFILIATE_CODE_EGQ,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_egw,arrayFunc(process.env.check_FCP_egw_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_ecm,arrayFunc(process.env.check_FCP_ecm_PAYLOAD),process.env.AFFILIATE_ECM,process.env.AFFILIATE_CODE_ECM,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_ecf,arrayFunc(process.env.check_FCP_ecf_PAYLOAD),process.env.AFFILIATE_ECF,process.env.AFFILIATE_CODE_ECF,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_ecd,arrayFunc(process.env.check_FCP_ecd_PAYLOAD),process.env.AFFILIATE_ECD,process.env.AFFILIATE_CODE_ECD,'FCP'),
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_ecg,arrayFunc(process.env.check_FCP_ecg_PAYLOAD),process.env.AFFILIATE_ECG,process.env.AFFILIATE_CODE_ECG,'FCP') , 
  myFunctions.newgetddnewsSSHScript(process.env.check_FCP_egn,arrayFunc(process.env.check_FCP_egn_PAYLOAD),process.env.AFFILIATE_EGN,process.env.AFFILIATE_CODE_EGN,'FCP'),


  ]);
}

async function getMNOs(){
  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'MNOs'),
        
    //awa
    //EGH
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_gambia,arrayFunc(process.env.fetch_MNOs_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_laberia,arrayFunc(process.env.fetch_MNOs_laberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_seria,arrayFunc(process.env.fetch_MNOs_seria_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'MNOs'),
   
///fwa
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_mali,arrayFunc(process.env.fetch_MNOs_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_burkina,arrayFunc(process.env.fetch_MNOs_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_cote,arrayFunc(process.env.fetch_MNOs_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_senegal,arrayFunc(process.env.fetch_MNOs_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_niger,arrayFunc(process.env.fetch_MNOs_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_benin,arrayFunc(process.env.fetch_MNOs_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'MNOs'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_togo,arrayFunc(process.env.fetch_MNOs_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'MNOs'),
 
 ///cesa 1

 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_kenya,arrayFunc(process.env.fetch_MNOs_kenya_PAYLOAD),process.env.AFFILIATE_EKE,process.env.AFFILIATE_CODE_EKE,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_uganda,arrayFunc(process.env.fetch_MNOs_uganda_PAYLOAD),process.env.AFFILIATE_EUG,process.env.AFFILIATE_CODE_EUG,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_tanzania,arrayFunc(process.env.fetch_MNOs_tanzania_PAYLOAD),process.env.AFFILIATE_ETZ,process.env.AFFILIATE_CODE_ETZ,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_rwanda,arrayFunc(process.env.fetch_MNOs_rwanda_PAYLOAD),process.env.AFFILIATE_ERW,process.env.AFFILIATE_CODE_ERW,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_malawi,arrayFunc(process.env.fetch_MNOs_malawi_PAYLOAD),process.env.AFFILIATE_EMW,process.env.AFFILIATE_CODE_EMW,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_zimbia,arrayFunc(process.env.fetch_MNOs_zimbia_PAYLOAD),process.env.AFFILIATE_EZM,process.env.AFFILIATE_CODE_EZM,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_zw,arrayFunc(process.env.fetch_MNOs_zw_PAYLOAD),process.env.AFFILIATE_EZW,process.env.AFFILIATE_CODE_EZW,'MNOs') ,  
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_sudan,arrayFunc(process.env.fetch_MNOs_sudan_PAYLOAD),process.env.AFFILIATE_ESS,process.env.AFFILIATE_CODE_ESS,'MNOs'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_mz,arrayFunc(process.env.fetch_MNOs_mz_PAYLOAD),process.env.AFFILIATE_EMZ,process.env.AFFILIATE_CODE_EMZ,'MNOs'),
  
///cesa 2

myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_td,arrayFunc(process.env.fetch_MNOs_td_PAYLOAD),process.env.AFFILIATE_ETD,process.env.AFFILIATE_CODE_ETD,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_est,arrayFunc(process.env.fetch_MNOs_est_PAYLOAD),process.env.AFFILIATE_EST,process.env.AFFILIATE_CODE_EST,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ebi,arrayFunc(process.env.fetch_MNOs_ebi_PAYLOAD),process.env.AFFILIATE_EBI,process.env.AFFILIATE_CODE_EBI,'FCP'),
//myFunctions.newgetddnewsSSHScript(process.env.check_FCP_gabon,arrayFunc(process.env.check_FCP_gabon_PAYLOAD),process.env.AFFILIATE_EGA,process.env.AFFILIATE_CODE_EGA,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_egq,arrayFunc(process.env.fetch_MNOs_egq_PAYLOAD),process.env.AFFILIATE_EGQ,process.env.AFFILIATE_CODE_EGQ,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_egw,arrayFunc(process.env.fetch_MNOs_egw_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ecm,arrayFunc(process.env.fetch_MNOs_ecm_PAYLOAD),process.env.AFFILIATE_ECM,process.env.AFFILIATE_CODE_ECM,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ecf,arrayFunc(process.env.fetch_MNOs_ecf_PAYLOAD),process.env.AFFILIATE_ECF,process.env.AFFILIATE_CODE_ECF,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ecd,arrayFunc(process.env.fetch_MNOs_ecd_PAYLOAD),process.env.AFFILIATE_ECD,process.env.AFFILIATE_CODE_ECD,'FCP'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_ecg,arrayFunc(process.env.fetch_MNOs_ecg_PAYLOAD),process.env.AFFILIATE_ECG,process.env.AFFILIATE_CODE_ECG,'FCP') , 
myFunctions.newgetddnewsSSHScript(process.env.fetch_MNOs_egn,arrayFunc(process.env.fetch_MNOs_egn_PAYLOAD),process.env.AFFILIATE_EGN,process.env.AFFILIATE_CODE_EGN,'FCP'),

  ]);
}


async function getLocalBanks(){

  const myArrayENG =['ng','2348068998308','ENG'];
  const myArrayEGH =['gh','233244224424','EGH'];
  await Promise.all([
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'local_banks'),
        
    //awa
    //EGH
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_gambia,arrayFunc(process.env.fetch_local_banks_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_liberia,arrayFunc(process.env.fetch_local_banks_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_sirrea,arrayFunc(process.env.fetch_local_banks_sirrea_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'local_banks'),
   

 //fwa 
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_mali,arrayFunc(process.env.fetch_local_banks_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_burkina,arrayFunc(process.env.fetch_local_banks_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_cote,arrayFunc(process.env.fetch_local_banks_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_senegal,arrayFunc(process.env.fetch_local_banks_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_niger,arrayFunc(process.env.fetch_local_banks_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_benin,arrayFunc(process.env.fetch_local_banks_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'local_banks'),
    myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_togo,arrayFunc(process.env.fetch_local_banks_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'local_banks'),
  

     ///cesa 1

 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_kenya,arrayFunc(process.env.fetch_local_banks_kenya_PAYLOAD),process.env.AFFILIATE_EKE,process.env.AFFILIATE_CODE_EKE,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_uganda,arrayFunc(process.env.fetch_local_banks_uganda_PAYLOAD),process.env.AFFILIATE_EUG,process.env.AFFILIATE_CODE_EUG,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_tanzania,arrayFunc(process.env.fetch_local_banks_tanzania_PAYLOAD),process.env.AFFILIATE_ETZ,process.env.AFFILIATE_CODE_ETZ,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_rwanda,arrayFunc(process.env.fetch_local_banks_rwanda_PAYLOAD),process.env.AFFILIATE_ERW,process.env.AFFILIATE_CODE_ERW,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_malawi,arrayFunc(process.env.fetch_local_banks_malawi_PAYLOAD),process.env.AFFILIATE_EMW,process.env.AFFILIATE_CODE_EMW,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_zambia,arrayFunc(process.env.fetch_local_banks_zimbia_PAYLOAD),process.env.AFFILIATE_EZM,process.env.AFFILIATE_CODE_EZM,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_zw,arrayFunc(process.env.fetch_local_banks_zw_PAYLOAD),process.env.AFFILIATE_EZW,process.env.AFFILIATE_CODE_EZW,'local_banks') ,  
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_sudan,arrayFunc(process.env.fetch_local_banks_sudan_PAYLOAD),process.env.AFFILIATE_ESS,process.env.AFFILIATE_CODE_ESS,'local_banks'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_moz,arrayFunc(process.env.fetch_local_banks_moz_PAYLOAD),process.env.AFFILIATE_EMZ,process.env.AFFILIATE_CODE_EMZ,'local_banks'),
  
 ///cesa 2

myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_td,arrayFunc(process.env.fetch_local_banks_td_PAYLOAD),process.env.AFFILIATE_ETD,process.env.AFFILIATE_CODE_ETD,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_st,arrayFunc(process.env.fetch_local_banks_st_PAYLOAD),process.env.AFFILIATE_EST,process.env.AFFILIATE_CODE_EST,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_bi,arrayFunc(process.env.fetch_local_banks_bi_PAYLOAD),process.env.AFFILIATE_EBI,process.env.AFFILIATE_CODE_EBI,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_ga,arrayFunc(process.env.fetch_local_banks_ga_PAYLOAD),process.env.AFFILIATE_EGA,process.env.AFFILIATE_CODE_EGA,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_gq,arrayFunc(process.env.fetch_local_banks_gq_PAYLOAD),process.env.AFFILIATE_EGQ,process.env.AFFILIATE_CODE_EGQ,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_gw,arrayFunc(process.env.fetch_local_banks_gw_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_cm,arrayFunc(process.env.fetch_local_banks_cm_PAYLOAD),process.env.AFFILIATE_ECM,process.env.AFFILIATE_CODE_ECM,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_cf,arrayFunc(process.env.fetch_local_banks_cf_PAYLOAD),process.env.AFFILIATE_ECF,process.env.AFFILIATE_CODE_ECF,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_cd,arrayFunc(process.env.fetch_local_banks_cd_PAYLOAD),process.env.AFFILIATE_ECD,process.env.AFFILIATE_CODE_ECD,'local_banks'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_cg,arrayFunc(process.env.fetch_local_banks_cg_PAYLOAD),process.env.AFFILIATE_ECG,process.env.AFFILIATE_CODE_ECG,'local_banks') , 
myFunctions.newgetddnewsSSHScript(process.env.fetch_local_banks_gn,arrayFunc(process.env.fetch_local_banks_gn_PAYLOAD),process.env.AFFILIATE_EGN,process.env.AFFILIATE_CODE_EGN,'local_banks'),


  ])
}
// //getBalanace()


async function getFetchCharges(){

  const myArrayENG =['ng','2348068998308','ENG','"059100XXXX67 - NGN SAV"'];
  const myArrayEGH =['gh','233244224424','EGH','XPRESS'];
  await Promise.all([
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_nigeria,myArrayENG,process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'fetch_charges'),
        
 ///awa
  //EGH
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_ghana,myArrayEGH,process.env.AFFILIATE_GH, process.env.AFFILIATE_CODE_GH,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_gambia,arrayFunc(process.env.fetch_charges_gambia_PAYLOAD),process.env.AFFILIATE_EGM,process.env.AFFILIATE_CODE_EGM,'local_banks'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_liberia,arrayFunc(process.env.fetch_charges_liberia_PAYLOAD),process.env.AFFILIATE_ELR,process.env.AFFILIATE_CODE_ELR,'local_banks'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_sirrea,arrayFunc(process.env.fetch_charges_sirrea_PAYLOAD),process.env.AFFILIATE_ESL,process.env.AFFILIATE_CODE_ESL,'local_banks'),
 
  //fwa

  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_mali,arrayFunc(process.env.fetch_charges_mali_PAYLOAD),process.env.AFFILIATE_ML,process.env.AFFILIATE_CODE_ML,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_burkina,arrayFunc(process.env.fetch_charges_burkina_PAYLOAD),process.env.AFFILIATE_BF,process.env.AFFILIATE_CODE_BF,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_cote,arrayFunc(process.env.fetch_charges_cote_PAYLOAD),process.env.AFFILIATE_CI,process.env.AFFILIATE_CODE_CI,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_senegal,arrayFunc(process.env.fetch_charges_senegal_PAYLOAD),process.env.AFFILIATE_SN,process.env.AFFILIATE_CODE_SN,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_niger,arrayFunc(process.env.fetch_charges_niger_PAYLOAD),process.env.AFFILIATE_ENE,process.env.AFFILIATE_CODE_ENE,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_benin,arrayFunc(process.env.fetch_charges_benin_PAYLOAD),process.env.AFFILIATE_EBJ,process.env.AFFILIATE_CODE_EBJ,'fetch_charges'),
  myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_togo,arrayFunc(process.env.fetch_charges_togo_PAYLOAD),process.env.AFFILIATE_ETG,process.env.AFFILIATE_CODE_ETG,'fetch_charges'),
  
     ///cesa 1

 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_kenya,arrayFunc(process.env.fetch_charges_kenya_PAYLOAD),process.env.AFFILIATE_EKE,process.env.AFFILIATE_CODE_EKE,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_uganda,arrayFunc(process.env.fetch_charges_uganda_PAYLOAD),process.env.AFFILIATE_EUG,process.env.AFFILIATE_CODE_EUG,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_tanzania,arrayFunc(process.env.fetch_charges_tanzania_PAYLOAD),process.env.AFFILIATE_ETZ,process.env.AFFILIATE_CODE_ETZ,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_rwanda,arrayFunc(process.env.fetch_charges_rwanda_PAYLOAD),process.env.AFFILIATE_ERW,process.env.AFFILIATE_CODE_ERW,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_malawi,arrayFunc(process.env.fetch_charges_malawi_PAYLOAD),process.env.AFFILIATE_EMW,process.env.AFFILIATE_CODE_EMW,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_zambia,arrayFunc(process.env.fetch_charges_zambia_PAYLOAD),process.env.AFFILIATE_EZM,process.env.AFFILIATE_CODE_EZM,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_zw,arrayFunc(process.env.fetch_charges_zw_PAYLOAD),process.env.AFFILIATE_EZW,process.env.AFFILIATE_CODE_EZW,'fetch_charges') ,  
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_sudan,arrayFunc(process.env.fetch_charges_sudan_PAYLOAD),process.env.AFFILIATE_ESS,process.env.AFFILIATE_CODE_ESS,'fetch_charges'),
 myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_mz,arrayFunc(process.env.fetch_charges_mz_PAYLOAD),process.env.AFFILIATE_EMZ,process.env.AFFILIATE_CODE_EMZ,'fetch_charges'),
  
 ///cesa 2

myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_td,arrayFunc(process.env.fetch_charges_td_PAYLOAD),process.env.AFFILIATE_ETD,process.env.AFFILIATE_CODE_ETD,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_st,arrayFunc(process.env.fetch_charges_st_PAYLOAD),process.env.AFFILIATE_EST,process.env.AFFILIATE_CODE_EST,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_bi,arrayFunc(process.env.fetch_charges_bi_PAYLOAD),process.env.AFFILIATE_EBI,process.env.AFFILIATE_CODE_EBI,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_ga,arrayFunc(process.env.fetch_charges_ga_PAYLOAD),process.env.AFFILIATE_EGA,process.env.AFFILIATE_CODE_EGA,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_gq,arrayFunc(process.env.fetch_charges_gq_PAYLOAD),process.env.AFFILIATE_EGQ,process.env.AFFILIATE_CODE_EGQ,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_gw,arrayFunc(process.env.fetch_charges_gw_PAYLOAD),process.env.AFFILIATE_EGW,process.env.AFFILIATE_CODE_EGW,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_cm,arrayFunc(process.env.fetch_charges_cm_PAYLOAD),process.env.AFFILIATE_ECM,process.env.AFFILIATE_CODE_ECM,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_cf,arrayFunc(process.env.fetch_charges_cf_PAYLOAD),process.env.AFFILIATE_ECF,process.env.AFFILIATE_CODE_ECF,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_cd,arrayFunc(process.env.fetch_charges_cd_PAYLOAD),process.env.AFFILIATE_ECD,process.env.AFFILIATE_CODE_ECD,'fetch_charges'),
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_cg,arrayFunc(process.env.fetch_charges_cg_PAYLOAD),process.env.AFFILIATE_ECG,process.env.AFFILIATE_CODE_ECG,'fetch_charges') , 
myFunctions.newgetddnewsSSHScript(process.env.fetch_charges_gn,arrayFunc(process.env.fetch_charges_gn_PAYLOAD),process.env.AFFILIATE_EGN,process.env.AFFILIATE_CODE_EGN,'fetch_charges'),


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