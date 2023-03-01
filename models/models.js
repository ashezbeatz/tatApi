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
        let sqls = `SELECT 
        DATE_FORMAT(
          FROM_UNIXTIME(
            FLOOR(UNIX_TIMESTAMP(DbInDate) / 300) * 300
          ),
          '%H:%i'
        ) AS interval_range,ROUND(AVG(TurTime) ,2) AS Average,
        COUNT(*) AS count
      FROM turn_a_time
      
      GROUP BY 
        interval_range`;

        return  await db.execute(sqls);
    }

}

module.exports = Post;