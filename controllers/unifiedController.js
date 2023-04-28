
const PostUniData = require('../models/unified')
class UnifiedController{

    static async SaveData(req,res,next){
           console.log(req)
           console.log("Request Body : "+req)
           try{
            //if request is empty
            if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ error: "Request body cannot be empty" });
              }

            const requiredFields = [      "start_datetime",      "end_datetime",      "sessionId",      "affiliate_code",      "response_code",      "response_message",      "serviceName",    ];

            for (const field of requiredFields) {
            if (!req.body[field]) {
                return res
                .status(400)
                .json({ error: `${field} is a required field` });
            }
            } 
           let {start_datetime,end_datetime,sessionId,affiliate_code,
            response_code,response_message,serviceName} = req.body
            let psData = new PostUniData(start_datetime,end_datetime,sessionId,affiliate_code,
                response_code,response_message,serviceName)
                psData = await psData.saveData()
        //res.send("From Unified Controller")
        console.log(psData)
        if(psData === 'Data already exists'){
            res.status(201).json({message :psData})
        }else{
            res.status(200).json({message :'Data saved successfully'})  
        }
     
    }catch(error){
        console.log(error)
       // res.status(400).json({ error: `${error} ` })
       res.status(400).json({ error: error.message });
      next(error)

    }
    }

    static async getData(req,res,next){
        try {
            let [data] =await PostUniData.getUniData();
            res.status(200).json({data})
        } catch (error) {
            console.log(error)
            next(error) 
        }
      
    }

}

module.exports = UnifiedController