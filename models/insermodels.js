//const Database =require('../config/mdb');
const db = require('../config/mdb copy')


class InsertData{

    constructor(affiliateName,affilateCode,tat,statusMessage,producttype,message){
        this.affiliateName = affiliateName;
        this.affilateCode = affilateCode;
        this.tat = tat;
        this.statusMessage = statusMessage;
        this.message = message;
        this.producttype = producttype;

    }


async  getData() {
    let connection;
    try {
       // let connection = await Database.pool.getConnection(); // get a connection from the pool
       connection = await db.pool.getConnection();
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
  
    const createdDate = `${yyyy}-${mm}-${dd}`;
  
    const sql = `
      INSERT INTO turn_a_time(affiliateName,
        affiliateCode,
        TurTime,
        TurDateTime,
        statusMessage,
        message,
        producttype)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        this.affiliateName,
        this.affiliateCode,
        this.tat,
        createdDate,
        this.statusMessage,
        this.message,
        this.producttype,
      ];
     //   let result = await connection.query(sql,values)
       // const result = await db.query(sql, values);
    //    console.log(result);
     //   await db.close();
       // return result;
    //   connection.release(); // release the connection back to the pool
    const result = await connection.query(sql,values);  
    connection.release(); 
    return result;
      } catch (error) {
        console.log(error);
      }finally {
        //await Database.pool.close();
      }

    
}

/*static async getBalance(){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}


static async getFCP(){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}

static async getMNOs(){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}

static async getlocal_banks(){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}


static async getfetch_charges(){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}




static async  findOneData(affiliate,producttype){

    try{

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
        const result = await db.querySelect(sqls);
        console.log(result.rows.length);
        return  result.rows.length ? result.rows : []

    }catch(error){
        console.error(error);
        return [];
    }finally {
        await db.close();
      }
    //db.close()
}*/

}


module.exports = InsertData;