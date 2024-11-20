const { DataTypes } = require('sequelize');
const { mySequelize } = require ('../config/connectDB.js')


const Users = mySequelize.define('Users', {
    userID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSeller: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
    {
      timestamps: false
    }
);
  
  module.exports = Users;