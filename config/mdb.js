require("dotenv").config();

const mysql = require('mysql2/promise');

class Database {
  constructor() {
    this.pool = null;
  }

  async initPool() {
    if (this.pool === null) {
      this.pool = mysql.createPool({
        host: process.env.mysqlUDBhost,
        user: process.env.mysqlUDBuser,
        password: process.env.mysqlUDBpassword,
        database: process.env.mysqlUDB,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        namedPlaceholders: true,
        maxPreparedStatements: 1000,
      });
    }
    return this.pool;
  }

  async query(sql, values) {
    const pool = await this.initPool();
    const [rows, fields] = await pool.query(sql, values);
    return rows;
  }

  async querySelect(sql, values) {
    const pool = await this.initPool();
    const [rows, fields] = await pool.query(sql, values);
    return { rows, fields };
  }

  async close() {
    if (this.pool !== null) {
      await this.pool.end();
      this.pool = null;
    }
  }
}

module.exports = new Database();
