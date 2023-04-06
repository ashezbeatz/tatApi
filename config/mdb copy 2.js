require("dotenv").config();

const mysql = require('mysql2/promise');

class Database {
  constructor() {
    this.pool = mysql.createPool({
      host:  process.env.mysqlUDBhost,
      user:  process.env.mysqlUDBuser,
      password: process.env.mysqlUDBpassword,
      database : process.env.mysqlUDB,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      namedPlaceholders: true, // enable named placeholders
      maxPreparedStatements: 1000, 
    });

    // test the connection on creation
    this.pool.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database successfully!');
        connection.release(); // release the connection
      }
    });
  }

  async query(sql, values) {
    try {
      // check if the connection is still active before running queries
      await this.pool.getConnection();
      const [rows, fields] = await this.pool.query(sql, values);
      return rows;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async querySelect(sql, values) {
    try {
      // check if the connection is still active before running queries
      await this.pool.getConnection();
      const [rows, fields] = await this.pool.query(sql, values);
      return { rows, fields };
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async close() {
    await this.pool.end();
  }
}

module.exports = new Database();
