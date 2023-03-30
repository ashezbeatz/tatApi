const db = require('../config/db')
class Post{

    constructor(affiliateName,affilateCode,tat,statusMessage,producttype,message){
        this.affiliateName = affiliateName;
        this.affilateCode = affilateCode;
        this.tat = tat;
        this.statusMessage = statusMessage;
        this.message = message;
        this.producttype = producttype;

    }
    
    async save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO turn_a_time(affiliateName,
            affiliateCode
            ,TurTime,
            TurDateTime,statusMessage,message,producttype)
            VALUES(
                '${this.affiliateName}',
                '${this.affilateCode}',
                '${this.tat}',
                '${createdDate}',
                '${this.statusMessage}',
                '${this.message}',
                '${this.producttype}'
            )
        `;
        const [newPost, _] = await db.execute(sql);
        return newPost

    }


    static async findAll(){
      try {
      const connection = await db.getConnection();
      await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
   
        let sqls = `SELECT 
        DATE_FORMAT(
          FROM_UNIXTIME(
            FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
          ),
          '%H:%i'
        ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
        COUNT(*) AS count, 
				sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
				sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
      FROM turn_a_time
      where DATE(DbInDate) =CURDATE() and producttype ='balance'
      GROUP BY 
        interval_range`;
        const [rows] = await  connection.execute(sqls);
       // return  await db.execute(sqls);
       
       connection.release();
     // return await  connection.execute(sqls);
     return rows.length ? [rows] : [[]];
    } catch (error) {
      console.error(error);
      return [[]];
    }
 }

    static async findAllFCP(){
      try {
        const connection = await db.getConnection();
      let sqls = `SELECT 
      DATE_FORMAT(
        FROM_UNIXTIME(
          FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
        ),
        '%H:%i'
      ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
      COUNT(*) AS count, 
      sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
      sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
    FROM turn_a_time
    where DATE(DbInDate) =CURDATE() and producttype ='FCP'
    GROUP BY 
      interval_range`;

      //return  await db.execute(sqls);
      const [rows] = await  connection.execute(sqls);
      // return  await db.execute(sqls);
      
      connection.release();
    // return await  connection.execute(sqls);
    return rows.length ? [rows] : [[]];
   } catch (error) {
     console.error(error);
     return [[]];
   }

  }

    static async findAllMNOs(){
      try {
        const connection = await db.getConnection();
        await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
   
      let sqls = `SELECT 
      DATE_FORMAT(
        FROM_UNIXTIME(
          FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
        ),
        '%H:%i'
      ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
      COUNT(*) AS count, 
      sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
      sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
    FROM turn_a_time
    where DATE(DbInDate) =CURDATE() and producttype ='MNOs'
    GROUP BY 
      interval_range`;

     // return  await db.execute(sqls);
     const [rows] = await  connection.execute(sqls);
     // return  await db.execute(sqls);
     
     connection.release();
   // return await  connection.execute(sqls);
   return rows.length ? [rows] : [[]];
  } catch (error) {
    console.error(error);
    return [[]];
  }
  
  }
  static async findAlllocal_banks(){
    try {
      const connection = await db.getConnection();
      await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
   
    let sqls = `SELECT 
    DATE_FORMAT(
      FROM_UNIXTIME(
        FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
      ),
      '%H:%i'
    ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
    COUNT(*) AS count, 
    sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
  FROM turn_a_time
  where DATE(DbInDate) =CURDATE() and producttype ='local_banks'
  GROUP BY 
    interval_range`;

  //  return  await db.execute(sqls);
  const [rows] = await  connection.execute(sqls);
  // return  await db.execute(sqls);
  
  connection.release();
// return await  connection.execute(sqls);
return rows.length ? [rows] : [[]];
} catch (error) {
 console.error(error);
 return [[]];
}

}
  static async findAllfetch_charges(){
    try {
      const connection = await db.getConnection(); 
    let sqls = `SELECT 
    DATE_FORMAT(
      FROM_UNIXTIME(
        FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
      ),
      '%H:%i'
    ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
    COUNT(*) AS count, 
    sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
  FROM turn_a_time
  where DATE(DbInDate) =CURDATE() and producttype ='fetch_charges'
  GROUP BY 
    interval_range`;

    //return  await db.execute(sqls);

    const [rows] = await  connection.execute(sqls);
    // return  await db.execute(sqls);
    
    connection.release();
  // return await  connection.execute(sqls);
  return rows.length ? [rows] : [[]];
  } catch (error) {
   console.error(error);
   return [[]];
  }

}

static async findOneData(affiliate,producttype){
  try {
    const connection = await db.getConnection(); 
    await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
   
  let sqls = `SELECT 
    DATE_FORMAT(
      FROM_UNIXTIME(
        FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
      ),
      '%H:%i'
    ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
    COUNT(*) AS count, 
    sum(CASE WHEN statusMessage  like '%Successful%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN statusMessage not like '%Successful%' THEN 1 else 0 end) as failed
  FROM turn_a_time
  where DATE(DbInDate) =CURDATE() and UPPER(producttype) =UPPER('${producttype}') and UPPER(affiliateCode) = UPPER('${affiliate}')
  GROUP BY 
    interval_range`;
///console.log(`quesries ${sqls}`)
   // return  await db.execute(sqls);


   const [rows] = await  connection.execute(sqls);
   // return  await db.execute(sqls);
   
   connection.release();
 // return await  connection.execute(sqls);
 return rows.length ? [rows] : [[]];
 } catch (error) {
  console.error(error);
  return [[]];
 }

}


}

module.exports = Post;