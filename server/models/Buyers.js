const { DataTypes } = require('sequelize');
const { mySequelize } = require ('../config/connectDB.js');
const { type } = require('@testing-library/user-event/dist/type/index.js');


const Buyers = mySequelize.define('Buyers', {
    buyerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Users,
        key: userID
      },
      onUpdate: 'CASCADE',
      unique: true
    },
    buyerName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    buyerEmail: {
      type: DataTypes.STRING,
      allowNull: false ,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.NUMBER, 
      allowNull: false
    }
},
    {
      timestamps: false
    }
);
  

Buyers.associate = (models) => {
  // A buyer belongs to a user
  Buyer.belongsTo(models.User, { foreignKey: 'buyerID' });

}

  
  module.exports = Buyers;