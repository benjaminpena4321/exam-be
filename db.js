// db.js
const Datastore = require("nedb");
require("dotenv").config();

const path = process.env.NEDB_PATH || "./data/exam_database.db";

const db = new Datastore({ 
  filename: path, 
  autoload: true 
});

module.exports = db;
