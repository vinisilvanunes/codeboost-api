const { Pool } = require("pg");
const dotenv = require("dotenv");
const path = require("path");

const envFile = `.env.${process.env.NODE_ENV || "dev"}`;
dotenv.config({ path: path.resolve(__dirname, envFile) });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "prod" ? { rejectUnauthorized: false } : false,
});

pool.connect()
  .then(() => console.log(`✅ Conectado ao PostgreSQL (${process.env.NODE_ENV})`))
  .catch(err => console.error("❌ Erro ao conectar no PostgreSQL", err));

module.exports = pool;