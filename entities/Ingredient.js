const { DataTypes } = require("sequelize");
const sequelize = require('../db');

//Defining Ingredient model
//We want flags for various special dietary restrictions (halal, vegetarian etc.)
const Ingredient = sequelize.define('Ingredient', {
    name: {
        type:DataTypes.STRING,
        allowNull: false, //Name of ingredient must be shown
    },
    supplier :{
        type: DataTypes.STRING,
    },
    //Boolean values to flag based on dietary restrictions
    isHalal: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // 
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

module.exports = Ingredient;