//This is a config file for database connection 

require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

//Configure Database with Sequlize library
const mySequelize = new Sequelize(
    process.env.DB_NAME,   // Database name
    process.env.DB_USER,   // Username
    process.env.DB_PASSWORD, // Password
    {
      host: process.env.DB_HOST,  // Host (localhost)
      dialect: 'mysql',           
      port: process.env.DB_PORT,  
    }
  );


async function checkDBconnect() {
    try {
      await mySequelize.authenticate();  
      console.log(`Connection with Database: ${process.env.DB_NAME} is SUCCESSFUL`)
    } 
    catch (err) {
      console.error('Unable to connect to the database, ERROR:', err.message);
      process.exit(1);  // Exit the process with failure if DB connection fails
    }
  }
module.exports = {
    mySequelize,
    checkDBconnect
}; 


