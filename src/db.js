import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_NON_POOLING + `?sslmode=${process.env.SSL_MODE}`,
});

export default pool;
