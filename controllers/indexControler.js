const Post = require('../models/models')
const mathFunctions = require('../shhconnection/sshRequest');

const myFunctions  = require('../shhconnection/shhtest');
const newFuncs  = require('../shhconnection/newssh')
require("dotenv").config();
const func = require('../functions/functions')
class IndexController{
    
    
    static async index(req,res,next){
       // let post = new Post("ghana","egh","001");
      // post = await post.save();

      try {
       const myArray =['cm','ECM','237670000000','"059100XXXX67 - NGN SAV"','080808'];
        const paths = '/check_BE_AWS_CESA2_new.sh';
      console.log(`payload path ${process.env.BAL_ENG_PATH}`)
      console.log(`payload array ${process.env.BAL_ENG_PATH}`) 
       const sum = mathFunctions.addNumbers(2, 3);
     const product = mathFunctions.multiplyNumbers(2, 3);
     const product2 = mathFunctions.multiplyNumbers(6, 3);
    
     console.log(sum)
     console.log(product)
     console.log(product2)
     
    //const sende = mathFunctions.getSSHRequest(paths,myArray)
    
         //  console.log(sende);
    
    //const newdata =  mathFunctions.newgetSSHScrip(paths,myArray)
    //console.log(" response : "+newdata);
    
    
   //const myData =  newFuncs.newgetSSHScript(paths,myArray,'cm','ECM','balance')
   //const pamdddd =[process.env.BAL_ENG_PATH]
   //var festivals = process.env.BAL_ENG_PAYLOAD.split(", ");
   
   //var festivals = func.arrayFunc(process.env.BAL_ENG_PAYLOAD);

   //console.log("asdsdasd"+process.env.fetch_MNOs_ghana_PAYLOAD)
   //var list = JSON.parse(process.env.fetch_MNOs_ghana_PAYLOAD)
  //eng
  ///const myData2 =  newFuncs.newgetSSHScript(process.env.BAL_ENG_PATH,func.arrayFunc(process.env.BAL_ENG_PAYLOAD),process.env.AFFILIATE_NG,process.env.AFFILIATE_CODE_NG,'balance')
  func.getBalanace()
         // const mydat = mathFunctions.checkData();
            res.send("Hello from Index Controller")
        
      } catch (error) {
        console.log(error)
            next(error)
      }
    
    }


    // static arrayFunc(data){
    //   var festivals = data.split(", ");

    //   return festivals;
    // }

    static home(req,res){
        res.send("From Home of Controller")
    }

    static mytest(req,res){
      // const dats = myTestFunc.pushDataTest()
      //const dats =  myFunctions.multiplyNumbers(2, 3);
      const dats = myFunctions.pushDataTest()
        res.send("From Test of Controller")
    }

    static async getBalanceEnquiry(req, res,next){

        try {
          let [post, _] = await Post.findAll() ;
            res.status(200).json({post})
        } catch (error) {
            console.log(error)
            next(error)
        }
       // res.send("From Balance Enqury of Controller")
    }

    static async getFCPData(req, res,next){

      try {
        let [fcp, _] = await Post.findAllFCP() ;
          res.status(200).json({fcp})
      } catch (error) {
          console.log(error)
          next(error)
      }
     // res.send("From Balance Enqury of Controller")
  }
    static async getMNOsData(req, res,next){

      try {
        let [mnos, _] = await Post.findAllMNOs() ;
          res.status(200).json({mnos})
      } catch (error) {
          console.log(error)
          next(error)
      }
     // res.send("From Balance Enqury of Controller")
  }
    static async getLocxalBanksData(req, res,next){

      try {
        let [localbank, _] = await Post.findAlllocal_banks() ;
          res.status(200).json({localbank})
      } catch (error) {
          console.log(error)
          next(error)
      }
     // res.send("From Balance Enqury of Controller")
  }
    static async getFetchChargesData(req, res,next){

      try {
        let [charges, _] = await Post.findAllfetch_charges() ;
          res.status(200).json({charges})
      } catch (error) {
          console.log(error)
          next(error)
      }
     // res.send("From Balance Enqury of Controller")
  }

  static async getFecthOneData(req,res,next){
    try {
      let affilateCode = req.params.affilicatecode;
      let product = req.params.producttype;
     // let affilateCode = req.query.affilicatecode;
      //let product = req.query.producttype;
      //console.log(affilateCode,product);
     // console.log(req);

     if(product==='balance'){
      let [post, _] = await Post.findOneData(affilateCode,product) ;
      res.status(200).json({post})
     }else if(product==='FCP'){
      let [fcp, _] = await Post.findOneData(affilateCode,product) ;
      res.status(200).json({fcp})
     }
     else if(product==='MNOs'){
      let [mnos, _] = await Post.findOneData(affilateCode,product) ;
      res.status(200).json({mnos})
     }
     else if(product==='local_banks'){
      let [localbank, _] = await Post.findOneData(affilateCode,product) ;
      res.status(200).json({localbank})
     }
     else if(product==='fetch_charges'){
      let [charges, _] = await Post.findOneData(affilateCode,product) ;
      res.status(200).json({charges})
     }
     
    } catch (error) {
      console.log(error)
          next(error)
    }
  }

}

module.exports = IndexController;