import { createPool } from 'mysql2/promise';

const connection = createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'db',
  user: process.env.MYSQL_USER || 'root',
});

export default connection;
