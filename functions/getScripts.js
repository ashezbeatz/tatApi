require("dotenv").config();

const myfuncts = require('./pusdata');
const myFunctions  = require('../shhconnection/newssh');

const newsshhhe = require('../shhconnection/sshnewCons')

const nessssss = require('../shhconnection/shhconsdd')
const { SSH } =  require('../shhconnection/new SSH.js')


async function runDataSh(){
    console.log(`payload path ${process.env.BAL_ENG_PATH}`)
    console.log(`payload array ${process.env.BAL_ENG_PAYLOAD}`) 

    console.log(`payload path ${process.env.BAL_EGH_PATH}`)
    console.log(`payload array ${process.env.BAL_EGH_PAYLOAD}`) 
   // const myArrayENG =['cm','ECM','237670000000','059100XXXX67 - NGN SAV','080808'];
    const myArrayENG =['ng','ENG','2348068998308','"059100XXXX67 - NGN SAV"','271400'];
    const myArrayEGH =['gh','EGH','233244224424','XPRESS','080809'];

    const myArrayFCPENG =['ng','2348068998308','ENG'];
  const myArrayFCPEGH =['gh','233244224424','EGH'];
  const myArrayMNoENG =['ng','2348068998308','ENG'];
  const myArrayMNoEGH =['gh','233244224424','EGH'];
  const myArraylocalENG =['ng','2348068998308','ENG'];
  const myArraylocalEGH =['gh','233244224424','EGH'];

  const myArraychargeENG =['ng','2348068998308','ENG','"059100XXXX67 - NGN SAV"'];
  const myArraychargeEGH =['gh','233244224424','EGH','XPRESS'];
    const scripts = [
        //balance
        { script: `${process.env.BAL_ENG_PATH}`, params: myArrayENG ,affiliate: process.env.AFFILIATE_NG,affcode:process.env.AFFILIATE_CODE_NG,transtype:'balance'},
        //awa
        { script: `${process.env.BAL_EGH_PATH}`, params: myArrayEGH ,affiliate: process.env.AFFILIATE_GH,affcode:process.env.AFFILIATE_CODE_GH,transtype:'balance'  },
        { script: `${process.env.BAL_EGM_PATH}`, params: arrayFunc(process.env.BAL_EGM_PAYLOAD) ,affiliate: process.env.AFFILIATE_EGM,affcode:process.env.AFFILIATE_CODE_EGM,transtype:'balance'  },
        { script: `${process.env.BAL_ESL_PATH}`, params: arrayFunc(process.env.BAL_ESL_PAYLOAD) ,affiliate: process.env.AFFILIATE_ESL,affcode:process.env.AFFILIATE_CODE_ESL,transtype:'balance'  },
        //FWA
        { script: `${process.env.BAL_ML_PATH}`, params: arrayFunc(process.env.BAL_ML_PAYLOAD) ,affiliate: process.env.AFFILIATE_ML,affcode:process.env.AFFILIATE_CODE_ML,transtype:'balance'  },
        { script: `${process.env.BAL_BF_PATH}`, params: arrayFunc(process.env.BAL_BF_PAYLOAD) ,affiliate: process.env.AFFILIATE_BF,affcode:process.env.AFFILIATE_CODE_BF,transtype:'balance'  },
        { script: `${process.env.BAL_CI_PATH}`, params: arrayFunc(process.env.BAL_CI_PAYLOAD) ,affiliate: process.env.AFFILIATE_CI,affcode:process.env.AFFILIATE_CODE_CI,transtype:'balance'  },
        { script: `${process.env.BAL_SN_PATH}`, params: arrayFunc(process.env.BAL_SN_PAYLOAD) ,affiliate: process.env.AFFILIATE_SN,affcode:process.env.AFFILIATE_CODE_SN,transtype:'balance'  },
        { script: `${process.env.BAL_ENE_PATH}`, params: arrayFunc(process.env.BAL_ENE_PAYLOAD) ,affiliate: process.env.AFFILIATE_ENE,affcode:process.env.AFFILIATE_CODE_ENE,transtype:'balance'  },
        { script: `${process.env.BAL_EBJ_PATH}`, params: arrayFunc(process.env.BAL_EBJ_PAYLOAD) ,affiliate: process.env.AFFILIATE_EBJ,affcode:process.env.AFFILIATE_CODE_EBJ,transtype:'balance'  },
        { script: `${process.env.BAL_ETG_PATH}`, params: arrayFunc(process.env.BAL_ETG_PAYLOAD) ,affiliate: process.env.AFFILIATE_ETG,affcode:process.env.AFFILIATE_CODE_ETG,transtype:'balance'  },
        { script: `${process.env.BAL_EGW_PATH}`, params: arrayFunc(process.env.BAL_EGW_PAYLOAD) ,affiliate: process.env.AFFILIATE_EGW,affcode:process.env.AFFILIATE_CODE_EGW,transtype:'balance'  },
        //cesa 1
        { script: `${process.env.BAL_EKE_PATH}`, params: arrayFunc(process.env.BAL_EKE_PAYLOAD) ,affiliate: process.env.AFFILIATE_EKE,affcode:process.env.AFFILIATE_CODE_EKE,transtype:'balance'  },
        { script: `${process.env.BAL_EUG_PATH}`, params: arrayFunc(process.env.BAL_EUG_PAYLOAD) ,affiliate: process.env.AFFILIATE_EUG,affcode:process.env.AFFILIATE_CODE_EUG,transtype:'balance'  },
        { script: `${process.env.BAL_ETZ_PATH}`, params: arrayFunc(process.env.BAL_ETZ_PAYLOAD) ,affiliate: process.env.AFFILIATE_ETZ,affcode:process.env.AFFILIATE_CODE_ETZ,transtype:'balance'  },
        { script: `${process.env.BAL_ERW_PATH}`, params: arrayFunc(process.env.BAL_ERW_PAYLOAD) ,affiliate: process.env.AFFILIATE_ERW,affcode:process.env.AFFILIATE_CODE_ERW,transtype:'balance'  },
        { script: `${process.env.BAL_EMW_PATH}`, params: arrayFunc(process.env.BAL_EMW_PAYLOAD) ,affiliate: process.env.AFFILIATE_EMW,affcode:process.env.AFFILIATE_CODE_EMW,transtype:'balance'  },
        { script: `${process.env.BAL_EZM_PATH}`, params: arrayFunc(process.env.BAL_EZM_PAYLOAD) ,affiliate: process.env.AFFILIATE_EZM,affcode:process.env.AFFILIATE_CODE_EZM,transtype:'balance'  },
        { script: `${process.env.BAL_EZW_PATH}`, params: arrayFunc(process.env.BAL_EZW_PAYLOAD) ,affiliate: process.env.AFFILIATE_EZW,affcode:process.env.AFFILIATE_CODE_EZW,transtype:'balance'  },
        { script: `${process.env.BAL_EMZ_PATH}`, params: arrayFunc(process.env.BAL_EMZ_PAYLOAD) ,affiliate: process.env.AFFILIATE_EMZ,affcode:process.env.AFFILIATE_CODE_EMZ,transtype:'balance'  },
        //cesa2
        { script: `${process.env.BAL_ETD_PATH}`, params: arrayFunc(process.env.BAL_ETD_PAYLOAD) ,affiliate: process.env.AFFILIATE_ETD,affcode:process.env.AFFILIATE_CODE_ETD,transtype:'balance'  },
        { script: `${process.env.BAL_EBI_PATH}`, params: arrayFunc(process.env.BAL_EBI_PAYLOAD) ,affiliate: process.env.AFFILIATE_EBI,affcode:process.env.AFFILIATE_CODE_EBI,transtype:'balance'  },
        { script: `${process.env.BAL_EGA_PATH}`, params: arrayFunc(process.env.BAL_EGA_PAYLOAD) ,affiliate: process.env.AFFILIATE_EGA,affcode:process.env.AFFILIATE_CODE_EGA,transtype:'balance'  },
        { script: `${process.env.BAL_EGQ_PATH}`, params: arrayFunc(process.env.BAL_EGQ_PAYLOAD) ,affiliate: process.env.AFFILIATE_EGQ,affcode:process.env.AFFILIATE_CODE_EGQ,transtype:'balance'  },
        { script: `${process.env.BAL_ECM_PATH}`, params: arrayFunc(process.env.BAL_ECM_PAYLOAD) ,affiliate: process.env.AFFILIATE_ECM,affcode:process.env.AFFILIATE_CODE_ECM,transtype:'balance'  },
        { script: `${process.env.BAL_ECD_PATH}`, params: arrayFunc(process.env.BAL_ECD_PAYLOAD) ,affiliate: process.env.AFFILIATE_ECD,affcode:process.env.AFFILIATE_CODE_ECD,transtype:'balance'  },
        { script: `${process.env.BAL_ECG_PATH}`, params: arrayFunc(process.env.BAL_ECG_PAYLOAD) ,affiliate: process.env.AFFILIATE_ECG,affcode:process.env.AFFILIATE_CODE_ECG,transtype:'balance'  },
        { script: `${process.env.BAL_ECV_PATH}`, params: arrayFunc(process.env.BAL_ECV_PAYLOAD) ,affiliate: process.env.AFFILIATE_ECV,affcode:process.env.AFFILIATE_CODE_ECV,transtype:'balance'  },
      
        // Add as many scripts as needed
            ///FCP
            //ENG
     /*       { script: `${process.env.check_FCP_nigeria}`, params: myArrayFCPENG  ,affiliate: process.env.AFFILIATE_NG,affcode:process.env.AFFILIATE_CODE_NG,transtype:'FCP'  },
            //AWA
            { script: `${process.env.check_FCP_ghana}`, params: myArrayFCPEGH  ,affiliate: process.env.AFFILIATE_GH,affcode:process.env.AFFILIATE_CODE_GH,transtype:'FCP'  },
            { script: `${process.env.check_FCP_gambia}`, params: arrayFunc(process.env.check_FCP_gambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGM,affcode:process.env.AFFILIATE_CODE_EGM,transtype:'FCP'  },
            { script: `${process.env.check_FCP_liberia}`, params:arrayFunc(process.env.check_FCP_liberia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ELR,affcode:process.env.AFFILIATE_CODE_ELR,transtype:'FCP'  },
            { script: `${process.env.check_FCP_serria}`, params: arrayFunc(process.env.check_FCP_serria_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESL,affcode:process.env.AFFILIATE_CODE_ESL,transtype:'FCP'  },
            //FWA
            { script: `${process.env.check_FCP_mali}`, params: arrayFunc(process.env.check_FCP_mali_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ML,affcode:process.env.AFFILIATE_CODE_ML,transtype:'FCP'  },
            { script: `${process.env.check_FCP_burkina}`, params: arrayFunc(process.env.check_FCP_burkina_PAYLOAD)  ,affiliate: process.env.AFFILIATE_BF,affcode:process.env.AFFILIATE_CODE_BF,transtype:'FCP'  },
            { script: `${process.env.check_FCP_cote}`, params: arrayFunc(process.env.check_FCP_cote_PAYLOAD)  ,affiliate: process.env.AFFILIATE_CI,affcode:process.env.AFFILIATE_CODE_CI,transtype:'FCP'  },
            { script: `${process.env.check_FCP_niger}`, params: arrayFunc(process.env.check_FCP_niger_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ENE,affcode:process.env.AFFILIATE_CODE_ENE,transtype:'FCP'  },
            { script: `${process.env.check_FCP_benin}`, params: arrayFunc(process.env.check_FCP_benin_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBJ,affcode:process.env.AFFILIATE_CODE_EBJ,transtype:'FCP'  },
            { script: `${process.env.check_FCP_togo}`, params: arrayFunc(process.env.check_FCP_togo_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETG,affcode:process.env.AFFILIATE_CODE_ETG,transtype:'FCP'  },
            ///
            ///CESA 1
            { script: `${process.env.check_FCP_kenya}`, params: arrayFunc(process.env.check_FCP_kenya_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EKE,affcode:process.env.AFFILIATE_CODE_EKE,transtype:'FCP'  },
            { script: `${process.env.check_FCP_uganda}`, params: arrayFunc(process.env.check_FCP_uganda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EUG,affcode:process.env.AFFILIATE_CODE_EUG,transtype:'FCP'  },
            { script: `${process.env.check_FCP_tanzania}`, params: arrayFunc(process.env.check_FCP_tanzania_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETZ,affcode:process.env.AFFILIATE_CODE_ETZ,transtype:'FCP'  },
            { script: `${process.env.check_FCP_rwanda}`, params: arrayFunc(process.env.check_FCP_rwanda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ERW,affcode:process.env.AFFILIATE_CODE_ERW,transtype:'FCP'  },
            { script: `${process.env.check_FCP_malawi}`, params: arrayFunc(process.env.check_FCP_malawi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMW,affcode:process.env.AFFILIATE_CODE_EMW,transtype:'FCP'  },
            { script: `${process.env.check_FCP_zambia}`, params: arrayFunc(process.env.check_FCP_zambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZM,affcode:process.env.AFFILIATE_CODE_EZM,transtype:'FCP'  },
            { script: `${process.env.check_FCP_zim}`, params: arrayFunc(process.env.check_FCP_zim_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZW,affcode:process.env.AFFILIATE_CODE_EZW,transtype:'FCP'  },
            { script: `${process.env.check_FCP_sudan}`, params: arrayFunc(process.env.check_FCP_sudan_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESS,affcode:process.env.AFFILIATE_CODE_ESS,transtype:'FCP'  },
            { script: `${process.env.check_FCP_moz}`, params: arrayFunc(process.env.check_FCP_moz_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMZ,affcode:process.env.AFFILIATE_CODE_EMZ,transtype:'FCP'  },
           
           //CESA 2
            { script: `${process.env.check_FCP_chad}`, params: arrayFunc(process.env.check_FCP_chad_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETD,affcode:process.env.AFFILIATE_CODE_ETD,transtype:'FCP'  },
            { script: `${process.env.check_FCP_southtom}`, params: arrayFunc(process.env.check_FCP_southtom_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EST,affcode:process.env.AFFILIATE_CODE_EST,transtype:'FCP'  },
            { script: `${process.env.check_FCP_burundi}`, params: arrayFunc(process.env.check_FCP_burundi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBI,affcode:process.env.AFFILIATE_CODE_EBI,transtype:'FCP'  },
            { script: `${process.env.check_FCP_gabon}`, params: arrayFunc(process.env.check_FCP_gabon_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGA,affcode:process.env.AFFILIATE_CODE_EGA,transtype:'FCP'  },
            { script: `${process.env.check_FCP_egq}`, params: arrayFunc(process.env.check_FCP_egq_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGQ,affcode:process.env.AFFILIATE_CODE_EGQ,transtype:'FCP'  },
            { script: `${process.env.check_FCP_egw}`, params: arrayFunc(process.env.check_FCP_egw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGW,affcode:process.env.AFFILIATE_CODE_EGW,transtype:'FCP'  },
            { script: `${process.env.check_FCP_ecm}`, params: arrayFunc(process.env.check_FCP_ecm_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECM,affcode:process.env.AFFILIATE_CODE_ECM,transtype:'FCP'  },
            { script: `${process.env.check_FCP_ecf}`, params: arrayFunc(process.env.check_FCP_ecf_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECF,affcode:process.env.AFFILIATE_CODE_ECF,transtype:'FCP'  },
            { script: `${process.env.check_FCP_ecd}`, params: arrayFunc(process.env.check_FCP_ecd_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECD,affcode:process.env.AFFILIATE_CODE_ECD,transtype:'FCP'  },
            { script: `${process.env.check_FCP_ecg}`, params: arrayFunc(process.env.check_FCP_ecg_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECG,affcode:process.env.AFFILIATE_CODE_ECG,transtype:'FCP'  },
            { script: `${process.env.check_FCP_egn}`, params: arrayFunc(process.env.check_FCP_egn_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGN,affcode:process.env.AFFILIATE_CODE_EGN,transtype:'FCP'  },
      
        
                //mnos

             //ENG
             { script: `${process.env.fetch_MNOs_nigeria}`, params: myArrayMNoENG  ,affiliate: process.env.AFFILIATE_NG,affcode:process.env.AFFILIATE_CODE_NG,transtype:'MNOs'  },
             //AWA
             { script: `${process.env.fetch_MNOs_ghana}`, params: myArrayMNoEGH  ,affiliate: process.env.AFFILIATE_GH,affcode:process.env.AFFILIATE_CODE_GH,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_gambia}`, params: arrayFunc(process.env.fetch_MNOs_gambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGM,affcode:process.env.AFFILIATE_CODE_EGM,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_laberia}`, params:arrayFunc(process.env.fetch_MNOs_laberia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ELR,affcode:process.env.AFFILIATE_CODE_ELR,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_seria}`, params: arrayFunc(process.env.fetch_MNOs_seria_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESL,affcode:process.env.AFFILIATE_CODE_ESL,transtype:'MNOs'  },
             //FWA
             { script: `${process.env.fetch_MNOs_mali}`, params: arrayFunc(process.env.fetch_MNOs_mali_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ML,affcode:process.env.AFFILIATE_CODE_ML,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_burkina}`, params: arrayFunc(process.env.fetch_MNOs_burkina_PAYLOAD)  ,affiliate: process.env.AFFILIATE_BF,affcode:process.env.AFFILIATE_CODE_BF,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_cote}`, params: arrayFunc(process.env.fetch_MNOs_cote_PAYLOAD)  ,affiliate: process.env.AFFILIATE_CI,affcode:process.env.AFFILIATE_CODE_CI,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_senegal}`, params: arrayFunc(process.env.fetch_MNOs_senegal_PAYLOAD)  ,affiliate: process.env.AFFILIATE_SN,affcode:process.env.AFFILIATE_CODE_SN,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_niger}`, params: arrayFunc(process.env.fetch_MNOs_niger_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ENE,affcode:process.env.AFFILIATE_CODE_ENE,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_benin}`, params: arrayFunc(process.env.fetch_MNOs_benin_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBJ,affcode:process.env.AFFILIATE_CODE_EBJ,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_togo}`, params: arrayFunc(process.env.fetch_MNOs_togo_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETG,affcode:process.env.AFFILIATE_CODE_ETG,transtype:'MNOs'  },
             ///
             ///CESA 1
             { script: `${process.env.fetch_MNOs_kenya}`, params: arrayFunc(process.env.fetch_MNOs_kenya_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EKE,affcode:process.env.AFFILIATE_CODE_EKE,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_uganda}`, params: arrayFunc(process.env.fetch_MNOs_uganda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EUG,affcode:process.env.AFFILIATE_CODE_EUG,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_tanzania}`, params: arrayFunc(process.env.fetch_MNOs_tanzania_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETZ,affcode:process.env.AFFILIATE_CODE_ETZ,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_rwanda}`, params: arrayFunc(process.env.fetch_MNOs_rwanda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ERW,affcode:process.env.AFFILIATE_CODE_ERW,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_malawi}`, params: arrayFunc(process.env.fetch_MNOs_malawi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMW,affcode:process.env.AFFILIATE_CODE_EMW,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_zimbia}`, params: arrayFunc(process.env.fetch_MNOs_zimbia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZM,affcode:process.env.AFFILIATE_CODE_EZM,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_zw}`, params: arrayFunc(process.env.fetch_MNOs_zw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZW,affcode:process.env.AFFILIATE_CODE_EZW,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_sudan}`, params: arrayFunc(process.env.fetch_MNOs_sudan_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESS,affcode:process.env.AFFILIATE_CODE_ESS,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_mz}`, params: arrayFunc(process.env.fetch_MNOs_mz_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMZ,affcode:process.env.AFFILIATE_CODE_EMZ,transtype:'MNOs'  },
            
            //CESA 2
             { script: `${process.env.fetch_MNOs_td}`, params: arrayFunc(process.env.fetch_MNOs_td_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETD,affcode:process.env.AFFILIATE_CODE_ETD,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_est}`, params: arrayFunc(process.env.fetch_MNOs_est_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EST,affcode:process.env.AFFILIATE_CODE_EST,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_ebi}`, params: arrayFunc(process.env.fetch_MNOs_ebi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBI,affcode:process.env.AFFILIATE_CODE_EBI,transtype:'MNOs'  },
             //{ script: `${process.env.check_FCP_gabon}`, params: arrayFunc(process.env.check_FCP_gabon_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGA,affcode:process.env.AFFILIATE_CODE_EGA,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_egq}`, params: arrayFunc(process.env.fetch_MNOs_egq_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGQ,affcode:process.env.AFFILIATE_CODE_EGQ,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_egw}`, params: arrayFunc(process.env.fetch_MNOs_egw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGW,affcode:process.env.AFFILIATE_CODE_EGW,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_ecm}`, params: arrayFunc(process.env.fetch_MNOs_ecm_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECM,affcode:process.env.AFFILIATE_CODE_ECM,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_ecf}`, params: arrayFunc(process.env.fetch_MNOs_ecf_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECF,affcode:process.env.AFFILIATE_CODE_ECF,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_ecd}`, params: arrayFunc(process.env.fetch_MNOs_ecd_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECD,affcode:process.env.AFFILIATE_CODE_ECD,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_ecg}`, params: arrayFunc(process.env.fetch_MNOs_ecg_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECG,affcode:process.env.AFFILIATE_CODE_ECG,transtype:'MNOs'  },
             { script: `${process.env.fetch_MNOs_egn}`, params: arrayFunc(process.env.fetch_MNOs_egn_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGN,affcode:process.env.AFFILIATE_CODE_EGN,transtype:'MNOs'  },
       

             ///Local Banks
              //ENG
              { script: `${process.env.fetch_local_banks_nigeria}`, params: myArraychargeENG  ,affiliate: process.env.AFFILIATE_NG,affcode:process.env.AFFILIATE_CODE_NG,transtype:'local_banks'  },
              //AWA
              { script: `${process.env.fetch_local_banks_ghana}`, params: myArraychargeEGH  ,affiliate: process.env.AFFILIATE_GH,affcode:process.env.AFFILIATE_CODE_GH,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_gambia}`, params: arrayFunc(process.env.fetch_local_banks_gambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGM,affcode:process.env.AFFILIATE_CODE_EGM,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_liberia}`, params:arrayFunc(process.env.fetch_local_banks_liberia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ELR,affcode:process.env.AFFILIATE_CODE_ELR,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_sirrea}`, params: arrayFunc(process.env.fetch_local_banks_sirrea_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESL,affcode:process.env.AFFILIATE_CODE_ESL,transtype:'local_banks'  },
              //FWA
              { script: `${process.env.fetch_local_banks_mali}`, params: arrayFunc(process.env.fetch_local_banks_mali_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ML,affcode:process.env.AFFILIATE_CODE_ML,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_burkina}`, params: arrayFunc(process.env.fetch_local_banks_burkina_PAYLOAD)  ,affiliate: process.env.AFFILIATE_BF,affcode:process.env.AFFILIATE_CODE_BF,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_cote}`, params: arrayFunc(process.env.fetch_local_banks_cote_PAYLOAD)  ,affiliate: process.env.AFFILIATE_CI,affcode:process.env.AFFILIATE_CODE_CI,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_senegal}`, params: arrayFunc(process.env.fetch_local_banks_senegal_PAYLOAD)  ,affiliate: process.env.AFFILIATE_SN,affcode:process.env.AFFILIATE_CODE_SN,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_niger}`, params: arrayFunc(process.env.fetch_local_banks_niger_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ENE,affcode:process.env.AFFILIATE_CODE_ENE,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_benin}`, params: arrayFunc(process.env.fetch_local_banks_benin_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBJ,affcode:process.env.AFFILIATE_CODE_EBJ,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_togo}`, params: arrayFunc(process.env.fetch_local_banks_togo_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETG,affcode:process.env.AFFILIATE_CODE_ETG,transtype:'local_banks'  },
              ///
              ///CESA 1
              { script: `${process.env.fetch_local_banks_kenya}`, params: arrayFunc(process.env.fetch_local_banks_kenya_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EKE,affcode:process.env.AFFILIATE_CODE_EKE,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_uganda}`, params: arrayFunc(process.env.fetch_local_banks_uganda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EUG,affcode:process.env.AFFILIATE_CODE_EUG,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_tanzania}`, params: arrayFunc(process.env.fetch_local_banks_tanzania_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETZ,affcode:process.env.AFFILIATE_CODE_ETZ,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_rwanda}`, params: arrayFunc(process.env.fetch_local_banks_rwanda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ERW,affcode:process.env.AFFILIATE_CODE_ERW,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_malawi}`, params: arrayFunc(process.env.fetch_local_banks_malawi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMW,affcode:process.env.AFFILIATE_CODE_EMW,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_zambia}`, params: arrayFunc(process.env.fetch_local_banks_zimbia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZM,affcode:process.env.AFFILIATE_CODE_EZM,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_zw}`, params: arrayFunc(process.env.fetch_local_banks_zw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZW,affcode:process.env.AFFILIATE_CODE_EZW,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_sudan}`, params: arrayFunc(process.env.fetch_local_banks_sudan_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESS,affcode:process.env.AFFILIATE_CODE_ESS,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_moz}`, params: arrayFunc(process.env.fetch_local_banks_moz_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMZ,affcode:process.env.AFFILIATE_CODE_EMZ,transtype:'local_banks'  },
             
             //CESA 2
              { script: `${process.env.fetch_local_banks_td}`, params: arrayFunc(process.env.fetch_local_banks_td_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETD,affcode:process.env.AFFILIATE_CODE_ETD,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_st}`, params: arrayFunc(process.env.fetch_local_banks_st_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EST,affcode:process.env.AFFILIATE_CODE_EST,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_bi}`, params: arrayFunc(process.env.fetch_local_banks_bi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBI,affcode:process.env.AFFILIATE_CODE_EBI,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_ga}`, params: arrayFunc(process.env.fetch_local_banks_ga_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGA,affcode:process.env.AFFILIATE_CODE_EGA,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_gq}`, params: arrayFunc(process.env.fetch_local_banks_gq_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGQ,affcode:process.env.AFFILIATE_CODE_EGQ,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_gw}`, params: arrayFunc(process.env.fetch_local_banks_gw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGW,affcode:process.env.AFFILIATE_CODE_EGW,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_cm}`, params: arrayFunc(process.env.fetch_local_banks_cm_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECM,affcode:process.env.AFFILIATE_CODE_ECM,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_cf}`, params: arrayFunc(process.env.fetch_local_banks_cf_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECF,affcode:process.env.AFFILIATE_CODE_ECF,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_cd}`, params: arrayFunc(process.env.fetch_local_banks_cd_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECD,affcode:process.env.AFFILIATE_CODE_ECD,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_cg}`, params: arrayFunc(process.env.fetch_local_banks_cg_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECG,affcode:process.env.AFFILIATE_CODE_ECG,transtype:'local_banks'  },
              { script: `${process.env.fetch_local_banks_gn}`, params: arrayFunc(process.env.fetch_local_banks_gn_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGN,affcode:process.env.AFFILIATE_CODE_EGN,transtype:'local_banks'  },
        
 


          ///charges
              //ENG
              { script: `${process.env.fetch_charges_nigeria}`, params: myArraychargeENG  ,affiliate: process.env.AFFILIATE_NG,affcode:process.env.AFFILIATE_CODE_NG,transtype:'fetch_charges'  },
              //AWA
              { script: `${process.env.fetch_charges_ghana}`, params: myArraychargeEGH  ,affiliate: process.env.AFFILIATE_GH,affcode:process.env.AFFILIATE_CODE_GH,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_gambia}`, params: arrayFunc(process.env.fetch_charges_gambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGM,affcode:process.env.AFFILIATE_CODE_EGM,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_liberia}`, params:arrayFunc(process.env.fetch_charges_liberia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ELR,affcode:process.env.AFFILIATE_CODE_ELR,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_sirrea}`, params: arrayFunc(process.env.fetch_charges_sirrea_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESL,affcode:process.env.AFFILIATE_CODE_ESL,transtype:'fetch_charges'  },
              //FWA
              { script: `${process.env.fetch_charges_mali}`, params: arrayFunc(process.env.fetch_charges_mali_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ML,affcode:process.env.AFFILIATE_CODE_ML,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_burkina}`, params: arrayFunc(process.env.fetch_charges_burkina_PAYLOAD)  ,affiliate: process.env.AFFILIATE_BF,affcode:process.env.AFFILIATE_CODE_BF,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_cote}`, params: arrayFunc(process.env.fetch_charges_cote_PAYLOAD)  ,affiliate: process.env.AFFILIATE_CI,affcode:process.env.AFFILIATE_CODE_CI,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_senegal}`, params: arrayFunc(process.env.fetch_charges_senegal_PAYLOAD)  ,affiliate: process.env.AFFILIATE_SN,affcode:process.env.AFFILIATE_CODE_SN,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_niger}`, params: arrayFunc(process.env.fetch_charges_niger_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ENE,affcode:process.env.AFFILIATE_CODE_ENE,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_benin}`, params: arrayFunc(process.env.fetch_charges_benin_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBJ,affcode:process.env.AFFILIATE_CODE_EBJ,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_togo}`, params: arrayFunc(process.env.fetch_charges_togo_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETG,affcode:process.env.AFFILIATE_CODE_ETG,transtype:'fetch_charges'  },
              ///
              ///CESA 1
              { script: `${process.env.fetch_charges_kenya}`, params: arrayFunc(process.env.fetch_charges_kenya_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EKE,affcode:process.env.AFFILIATE_CODE_EKE,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_uganda}`, params: arrayFunc(process.env.fetch_charges_uganda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EUG,affcode:process.env.AFFILIATE_CODE_EUG,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_tanzania}`, params: arrayFunc(process.env.fetch_charges_tanzania_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETZ,affcode:process.env.AFFILIATE_CODE_ETZ,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_rwanda}`, params: arrayFunc(process.env.fetch_charges_rwanda_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ERW,affcode:process.env.AFFILIATE_CODE_ERW,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_malawi}`, params: arrayFunc(process.env.fetch_charges_malawi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMW,affcode:process.env.AFFILIATE_CODE_EMW,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_zambia}`, params: arrayFunc(process.env.fetch_charges_zambia_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZM,affcode:process.env.AFFILIATE_CODE_EZM,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_zw}`, params: arrayFunc(process.env.fetch_charges_zw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EZW,affcode:process.env.AFFILIATE_CODE_EZW,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_sudan}`, params: arrayFunc(process.env.fetch_charges_sudan_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ESS,affcode:process.env.AFFILIATE_CODE_ESS,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_mz}`, params: arrayFunc(process.env.fetch_charges_mz_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EMZ,affcode:process.env.AFFILIATE_CODE_EMZ,transtype:'fetch_charges'  },
             
             //CESA 2
              { script: `${process.env.fetch_charges_td}`, params: arrayFunc(process.env.fetch_charges_td_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ETD,affcode:process.env.AFFILIATE_CODE_ETD,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_st}`, params: arrayFunc(process.env.fetch_charges_st_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EST,affcode:process.env.AFFILIATE_CODE_EST,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_bi}`, params: arrayFunc(process.env.fetch_charges_bi_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EBI,affcode:process.env.AFFILIATE_CODE_EBI,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_ga}`, params: arrayFunc(process.env.fetch_charges_ga_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGA,affcode:process.env.AFFILIATE_CODE_EGA,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_gq}`, params: arrayFunc(process.env.fetch_charges_gq_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGQ,affcode:process.env.AFFILIATE_CODE_EGQ,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_gw}`, params: arrayFunc(process.env.fetch_charges_gw_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGW,affcode:process.env.AFFILIATE_CODE_EGW,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_cm}`, params: arrayFunc(process.env.fetch_charges_cm_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECM,affcode:process.env.AFFILIATE_CODE_ECM,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_cf}`, params: arrayFunc(process.env.fetch_charges_cf_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECF,affcode:process.env.AFFILIATE_CODE_ECF,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_cd}`, params: arrayFunc(process.env.fetch_charges_cd_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECD,affcode:process.env.AFFILIATE_CODE_ECD,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_cg}`, params: arrayFunc(process.env.fetch_charges_cg_PAYLOAD)  ,affiliate: process.env.AFFILIATE_ECG,affcode:process.env.AFFILIATE_CODE_ECG,transtype:'fetch_charges'  },
              { script: `${process.env.fetch_charges_gn}`, params: arrayFunc(process.env.fetch_charges_gn_PAYLOAD)  ,affiliate: process.env.AFFILIATE_EGN,affcode:process.env.AFFILIATE_CODE_EGN,transtype:'fetch_charges'  },
        
 */

              


        ///
      ];

      const ssh = new SSH();
      try {
        for (const scriptd of scripts) {
          const { script, params,affiliate,affcode,transtype } = scriptd;
          const fullPath = process.env.HOSTPATH + script;
         const scriptArgs = params.join(' ');
         console.log(`command ${fullPath} ${scriptArgs}`)
          myFunctions.newgetddnewsSSHScript(script,params,affiliate,affcode,transtype);
         
         // const output = await ssh.exec(`bash ${fullPath} ${scriptArgs}`,affiliate, affcode, transtype);
          // process output and handle errors here
          //console.log("new outputs :"+ output)


        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        ssh.end();
      }

      // for (const script of scripts) {
      //   const { path, params,affiliate,affcode,transtype } = script;
      //   try {
      //     await nessssss.runScript(path, params);
      //   } catch (error) {
      //     console.error(`Error running script ${path}:`, error);
      //   }
      // }
      // runScript
     // myfuncts.runShellScriptsBalance(scripts);
    // myFunctions.newgetddnewsArrayTimeoutSSHScript(scripts);
  
    // newsshhhe.executeScriptsnesd2(scripts,myCallback);
    // newsshhhe.executeScriptsnesd2(scripts, (err) => {
    //   if (err) {
    //     console.log(`Error executing scripts: ${err.message}`);
    //   } else {
    //     console.log(`Scripts executed successfully.`);
    //   }
    // })
    ///nessssss.newgetddnewsSSHScript(scripts);
    //newsshhhe.executeScriptsnes2(scripts)
    //.then(() => console.log('All scripts executed successfully.'))
    //.catch(err => console.error(`Error executing scripts: ${err}`));
    // newsshhhe.executeScriptsd2(scripts)
    //newsshhhe.executeScriptsnes2(scripts)
    //newsshhhe.executePromiseScripts(scripts)
    //newsshhhe.executeScriptsd2(scripts)
    // newsshhhe.executeScriptsnew2(scripts)
    // newsshhhe.executeScriptsNew(scripts)
    // newsshhhe.executeScripts2(scripts)
   //newsshhhe.newConst(scripts)
   // .then(() => console.log('All scripts executed successfully.'))
  //.catch(err => console.error(`Error executing scripts: ${err}`));
}


function myCallback(err, result) {
  if (err) {
    console.error(`Error: ${err.message}`);
  } else {
    console.log(`Result: ${result}`);
  }
}

function arrayFunc(data){
    var festivals = data.split(", ");
  
    return festivals;
  }





  module.exports = {

    runDataSh
  }