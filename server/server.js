//This is the server file which is entry point for all server related tasks
const express = require('express');
require('dotenv').config();  // For reading environment variables
const {checkDBconnect} = require('./config/connectDB.js');  


const app = express();
const Port = process.env.PORT || 5000;

console.log(`process.env.PORT: ${process.env.PORT} `);
checkDBconnect();  // Test the database connection on server startup

require('./models'); // This ensures models are loaded and associations are set up






// Start the server
app.listen(Port, () => {
    console.log(`Server is running on Port: ${Port}`);
  });