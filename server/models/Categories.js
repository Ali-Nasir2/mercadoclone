const { DataTypes } = require('sequelize');
const { mySequelize } = require ('../config/connectDB.js')


const Categories = mySequelize.define('Categories', {
    categoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
    {
      timestamps: false
    }
);
  
  
  module.exports = Categories;