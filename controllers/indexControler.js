const Post = require('../models/models')
const mathFunctions = require('../shhconnection/sshRequest');

const myFunctions  = require('../shhconnection/shhtest');
const newFuncs  = require('../shhconnection/newssh')
class IndexController{
    
    
    static async index(req,res,next){
       // let post = new Post("ghana","egh","001");
      // post = await post.save();

      try {
        const myArray =['cm','ECM','237670000000','XPRESS','080808'];
        const paths = '/check_BE_AWS_CESA2_new.sh';
      
       const sum = mathFunctions.addNumbers(2, 3);
     const product = mathFunctions.multiplyNumbers(2, 3);
    
     console.log(sum)
     console.log(product)
    //const sende = mathFunctions.getSSHRequest(paths,myArray)
    
         //  console.log(sende);
    
    //const newdata =  mathFunctions.newgetSSHScrip(paths,myArray)
    //console.log(" response : "+newdata);
    
    
    const myData =  newFuncs.newgetSSHScript(paths,myArray)
         // const mydat = mathFunctions.checkData();
            res.send("Hello from Index Controller")
        
      } catch (error) {
        console.log(error)
            next(error)
      }
    
    }


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

}

module.exports = IndexController;