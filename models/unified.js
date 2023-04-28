const db = require('../config/mdb copy')

class PostUniData {
    constructor(start_datetime, end_datetime, sessionId, affiliate_code, response_code, response_message, serviceName) {

        this.start_datetime = start_datetime;
        this.end_datetime = end_datetime;
        this.sessionId = sessionId;
        this.affiliate_code = affiliate_code;
        this.response_code = response_code;
        this.response_message = response_message;
        this.serviceName = serviceName;

    }

    async saveData() {
        let connection;
        try {

            connection = await db.pool.getConnection();
            const d = new Date();
            const yyyy = d.getFullYear();
            const mm = d.getMonth() + 1;
            const dd = d.getDate();

            const createdDate = `${yyyy}-${mm}-${dd}`;

            const now = new Date();
            /*const options = { 
              year: 'numeric', 
              month: '2-digit', 
              day: '2-digit', 
              hour: '2-digit', 
              minute: '2-digit', 
              second: '2-digit' 
            };
            const formattedDate = now.toLocaleString('en-US', options).replace(/[/]/g, '-');
            console.log("new date: "+formattedDate+ " asadd "+now);*/
            //const datetimeObject = new Date(this.start_datetime);
            // const now = new Date();
            /*  const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
              };
              const formattedDateTime = now.toLocaleString('en-US', options).replace(/[/]/g, '-');
            */
            const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');

            console.log(formattedDateTime);

            const query = 'SELECT sessionID FROM unified_Tat WHERE sessionID = ? AND seviceName = ?';
            const values2 = [this.sessionId, this.serviceName];
            const sql = `
                    INSERT INTO unified_Tat(start_datetime,
                        end_datetime,
                        dbIntime_date,
                        affiliate_code,
                        response_code,
                        response_message,
                        sessionID,
                        seviceName
                        )
                        VALUES(?,?,?,?,?,?,?,?)
                    `;
            const values = [
                new Date(this.start_datetime),
                new Date(this.end_datetime),
                // createdDate,
                formattedDateTime,
                this.affiliate_code,
                this.response_code,
                this.response_message,
                this.sessionId,
                this.serviceName
            ];

            const [rows, fields] = await connection.query(query, values2);
            let result;
            if (rows.length > 0) {
                console.log('Data already exists');
                result = 'Data already exists';
                connection.release();
                return result;
            } else {

                result = await connection.query(sql, values);
                console.log('Data inserted successfully');
                connection.release();
                return result;
            }

            /*

            const result = await connection.query(sql,values);  
            connection.release(); 
            return result;*/

        } catch (error) {
            console.log(error);
        }

    }

    static async getUniDataold() {
        let connection;
        try {
            connection = await db.pool.getConnection();

            const querys = `SELECT 
        seviceName,
          
        NOW() AS current_datetime,
          DATE_SUB(NOW(), INTERVAL 5 MINUTE)  as 5ms,
           DATE_SUB(NOW(), INTERVAL 10 MINUTE)  as 10ms,
        AVG(
          CASE
            WHEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) <= 300 
              AND start_datetime >= DATE_SUB(NOW(), INTERVAL 5 MINUTE) 
              AND end_datetime <= NOW() 
            THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime)
            ELSE 0
          END
        ) AS 5_min_avg,
        AVG(
          CASE
            WHEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) <= 3600 
              AND start_datetime >= DATE_SUB(NOW(), INTERVAL 1 HOUR) 
              AND end_datetime <= NOW() 
            THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime)
            ELSE 0
          END
        ) AS 1_hour_avg,
        AVG(
          CASE
            WHEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) <= 600 
              AND start_datetime >= DATE_SUB(NOW(), INTERVAL 10 MINUTE) 
              AND end_datetime <= NOW() 
            THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime)
            ELSE 0
          END
        ) AS 10_min_avg,
           COUNT(*) AS count, 
                      sum(CASE WHEN response_code  ='000' THEN 1 else 0 end) as Successful,
                      sum(CASE WHEN response_code  !='000' THEN 1 else 0 end) as failed
      FROM unified_Tat where DATE(dbIntime_date) = CURDATE()
      GROUP BY seviceName`;

            const [rows, fields] = await connection.query(querys);
            let result;
            connection.release();
            console.log(rows);
            return rows.length ? [rows] : [
                []
            ]
        } catch (error) {
            connection.release();
            console.log(error);
            return [
                []
            ]
        }

    }


    static async getUniData() {
        let connection;
        try {
            connection = await db.pool.getConnection();

            const querys = `
            SELECT 
            seviceName,
            ROUND(
             AVG(
               CASE 
                 WHEN dbIntime_date >= NOW() - INTERVAL 5 MINUTE 
                 THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) / 1000
                 ELSE 0 
               END
             ),2) AS avg_turnaround_time_5min,
             
           COALESCE(sum(case when response_code = '000' and dbIntime_date >= NOW() - INTERVAL 5 MINUTE then 1 else 0 end),0) as success_5min,
           COALESCE(sum(case when response_code !='000' and dbIntime_date >= NOW() - INTERVAL 5 MINUTE then 1 else 0 end),0) as failed_5min,
             ROUND(
             AVG(
               CASE 
                 WHEN dbIntime_date >= NOW() - INTERVAL 10 MINUTE 
                 THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) / 1000
                 ELSE 0 
               END
             ),2) AS avg_turnaround_time_10min,
             
           COALESCE(sum(case when response_code = '000' and dbIntime_date >= NOW() - INTERVAL 10 MINUTE then 1 else 0 end),0) as success_10min,
           COALESCE(sum(case when response_code !='000' and dbIntime_date >= NOW() - INTERVAL 10 MINUTE then 1 else 0 end),0) as failed_10min,
             ROUND(
             AVG(
               CASE 
                 WHEN dbIntime_date >= NOW() - INTERVAL 1 HOUR 
                 THEN TIMESTAMPDIFF(SECOND, start_datetime, end_datetime) / 1000
                 ELSE 0 
               END
             ) ,2
             )AS avg_turnaround_time_1hr,
             
           COALESCE(sum(case when response_code = '000' and dbIntime_date >= NOW() - INTERVAL 1 HOUR then 1 else 0 end),0) as success_1h,
           COALESCE(sum(case when response_code !='000' and dbIntime_date >= NOW() - INTERVAL 1 HOUR then 1 else 0 end),0) as failed_1h
           FROM unified_Tat where date(dbIntime_date) =CURRENT_DATE()
           group by  seviceName  
                          `;

            const [rows, fields] = await connection.query(querys);
            let result;
            connection.release();
            console.log(rows);
            return rows.length ? [rows] : [
                []
            ]
        } catch (error) {
            connection.release();
            console.log(error);
            return [
                []
            ]
        }

    }


}


module.exports = PostUniData;