import pg from "pg";

const { Pool } = pg;

const masterPool = new Pool({
  host: "localhost",
  port: Number.parseInt(process.env.MASTER_PORT),
  user: 'postgres',
  database: "postgres",
  password: process.env.DATABASE_PASSWORD,
  number: 100
});

const slavePool = new Pool({
  host: "localhost",
  port: Number.parseInt(process.env.SLAVE_PORT),
  user: "postgres",
  database: "postgres",
  password: process.env.DATABASE_PASSWORD,
  number: 100,
});

const query = (sql, params) => {
  const isRead = sql.trim().toUpperCase().startsWith('SELECT');

  return isRead ? slavePool.query(sql, params) : masterPool.query(sql, params);
}

export { masterPool, slavePool, query };