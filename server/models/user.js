const { DataTypes } = require('sequelize');
const sequelize = require('../postgres');

const User = sequelize.define('User', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName:"users",
  createdAt:false,
  updatedAt:false
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;