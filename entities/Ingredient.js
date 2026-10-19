const { DataTypes } = require("sequelize");
const sequelize = require('../db');

//Defining Ingredient model
//We want flags for various special dietary restrictions (halal, vegetarian etc.)
const Ingredient = sequelize.define('Ingredient', {
    name: {
        type:DataTypes.STRING,
        allowNull: false, //This forces the column to not be empty
    },
    supplier :{
        type: DataTypes.STRING,
    },
    isHalal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isVegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isGlutenFree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isCeliacSafe: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    //This is an important flag for cross contamination at facilities
    mayContain: {
        type: DataTypes.BOOLEAN,
    },
});

module.exports = User;