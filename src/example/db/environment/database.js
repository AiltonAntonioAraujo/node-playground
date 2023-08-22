import pg from "pg"
import dotenv  from "dotenv"

const { Pool } = pg;

const envFile = dotenv.config();

if (envFile.error) {
  throw new Error("env file is missing");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Connected to postgres succesfully!');
});

export default {
  query: (text, params) => pool.query(text, params),
};