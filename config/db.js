require("dotenv").config();
const mysql = require('mysql2');

console.log("password"+process.env.mysqlUDBpassword)
const pool = mysql.createPool({
    host: process.env.mysqlUDBhost,
    user:  process.env.mysqlUDBuser,
    password: process.env.mysqlUDBpassword ,
    database : process.env.mysqlUDB
});

// let sql ="SELECT * FROM turn_a_time";

// pool.execute(sql,function(err, result){
//     if(err) throw err;
//     result.forEach((res) => {
//         console.log(res.affiliateName)
        
//     });
//     //console.log(result)
// })

module.exports = pool.promise();