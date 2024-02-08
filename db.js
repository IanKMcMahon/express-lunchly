/** Database for lunchly */

// const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

// db.connect();

// module.exports = db;


const { Client } = require("pg");
let db = new Client({ 

connectionString: "postgresql://postgres:cascadia8@localhost/lunchly"  

});

db.connect();

module.exports = db;