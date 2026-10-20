const { DataTypes } = require("sequelize");
const sequelize = require('../db');

//Defining MenuItem model
const MenuItem = sequelize.define('MenuItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, //if it's on the menu it must have a name
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null, //description is optional
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
    },
    portionSize: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    //below is a bunch of boolean values to filter based on dietary restrictions
    isHalal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isVegan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isGlutenFree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = MenuItem;