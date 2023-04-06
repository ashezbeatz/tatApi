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
      try{
        const connection = await db.getConnection();
        await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
     
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
        const [newPost, _] = await connection.execute(sql);
       // db.end();
       connection.release();
        return newPost
            }catch(error){
              console.error(error);
              return [[]];  
            }

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
				sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
				sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
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
      sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
      sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
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
      sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
      sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
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
    sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
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
    sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
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
let affilatename;
  switch(affiliate.toUpperCase()){
    case "ENG":
      affilatename = 'NIGERIA'
      break;
    case "EGH":
      affilatename = 'GHANA'
      break;
      case "EGM":
      affilatename = 'Gambia'
      break;
      case "ELR":
        affilatename = 'Liberia'
        break;
      case "ESL":
        affilatename = 'Sierra Leone'
        break;
        case "EML":
          affilatename = 'MALI'
          break;
          case "EBF":
          affilatename = 'BURKINA FASO'
          break;
          case "ECI":
            affilatename = 'Cote dIvoire'
            break;
          case "ESN":
            affilatename = 'Senegal'
            break;
        case "ENE":
          affilatename = 'NIGER'
          break;
          case "EBJ":
          affilatename = 'BENIN'
          break;
          case "ETG":
            affilatename = 'TOGO'
            break;
          case "EGW":
            affilatename = 'Guinea Bissau'
            break;
      //cesa1

      case "EKE":
        affilatename = 'Kenya'
        break;
        case "EUG":
          affilatename = 'UGANDA'
          break;
          case "ETZ":
          affilatename = 'Tanzania'
          break;
          case "ERW":
            affilatename = 'RWANDA'
            break;
          case "EMW":
            affilatename = 'Malawi'
            break;
        case "EZM":
          affilatename = 'Zambia'
          break;
          case "EZW":
          affilatename = 'Zimbabwe'
          break;

          case "ESS":
            affilatename = 'South Sudan'
            break;
          case "EMZ":
            affilatename = 'Mozambique'
            break;
        //cesa 2 
        case "ETD":
          affilatename = 'Chad'
          break;
          case "EST":
            affilatename = 'Sao Tome'
            break;
            case "EBI":
            affilatename = 'Burundi'
            break;
            case "EGA":
              affilatename = 'Gabon'
              break;
            case "EGQ":
              affilatename = 'Equitoria Guinea'
              break;
          case "EGW":
            affilatename = 'Guinea Bissau'
            break;
            case "ECF":
            affilatename = 'Central Africa'
            break;
  
            case "ECD":
              affilatename = 'Democratic Republic of Congo'
              break;
            case "ECG":
              affilatename = 'Congo B'
              break;   
            case "EGN":
              affilatename = 'Guinea Conakry'
              break;
            case "ECV":
              affilatename = 'Cape Verde'
              break;   

  }
  console.log("affiliate name : "+ affilatename)
  try {
    const connection = await db.getConnection(); 
    await connection.execute('SET GLOBAL max_prepared_stmt_count = 200'); // set max_prepared_stmt_count dynamically
   
  /*let sqls = `SELECT 
    DATE_FORMAT(
      FROM_UNIXTIME(
        FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
      ),
      '%H:%i'
    ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
    COUNT(*) AS count, 
    sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
  FROM turn_a_time
  where DATE(DbInDate) =CURDATE() and UPPER(producttype) =UPPER('${producttype}') and UPPER(affiliateCode) = UPPER('${affiliate}')
  GROUP BY 
    interval_range`;*/
  let sqls = `SELECT 
    DATE_FORMAT(
      FROM_UNIXTIME(
        FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
      ),
      '%H:%i'
    ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
    COUNT(*) AS count, 
    sum(CASE WHEN UPPER(statusMessage)  like '%SUCCESS%' THEN 1 else 0 end) as Successful,
    sum(CASE WHEN upper(statusMessage) not like '%SUCCESS%' THEN 1 else 0 end) as failed
  FROM turn_a_time
  where DATE(DbInDate) =CURDATE() and UPPER(producttype) =UPPER('${producttype}') and UPPER(affiliateName) = UPPER('${affilatename}')
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