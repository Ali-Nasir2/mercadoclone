const { DataTypes } = require('sequelize');
const { mySequelize } = require ('../config/connectDB.js')


const Sellers = mySequelize.define('Sellers', {
    sellerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Users,
        key: userID
      },
      onUpdate: 'CASCADE',
      unique: true
    },
    sellerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    sellerEmail: {
      type: DataTypes.STRING,
      allowNull: false ,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    }
},
  {
      timestamps: false
  }
);
  
  Sellers.associate = (models) => {
    Seller.belongsTo(models.User, { foreignKey: 'sellerID' }); // A seller belongs to a user
    
  };




  module.exports = Sellers;


