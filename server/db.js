const Pool = require("pg").Pool;

const pool = new Pool({
  user: "sebas",
  password: "251877",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;