const { DataTypes } = require("sequelize");
const sequelize = require('../db');

//Defining User model
const User = sequelize.define('User', {
    username: {
        type:DataTypes.STRING,
        allowNull: false, //This forces the column to not be empty
        unique: true,
    },
    role :{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'guest',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;