class Auth{

    static validate(req,res,next){


        console.log("From Auth Middleware");
        next();
    }
}


module.exports = Auth;