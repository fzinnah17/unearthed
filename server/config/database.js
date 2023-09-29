import pg from "pg"

const connectionString = "postgresql://postgres:cpPqbrqadkTK0nXTmWST@containers-us-west-83.railway.app:7519/railway"


const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    connectionString
}
export const pool = new pg.Pool(config)