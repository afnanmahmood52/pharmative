const { Sequelize } = require('sequelize');
require("dotenv").config({path: '../../.env'});

const db = new Sequelize(
    process.env.PH_API_DB_NAME,
    process.env.PH_API_DB_USERNAME,
    process.env.PH_API_DB_PASSWORD, {
    host: process.env.PH_API_DB_HOST,
    dialect:  process.env.PH_API_DB_DIALECT
});

module.exports = db
