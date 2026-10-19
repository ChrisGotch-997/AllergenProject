const { DataTypes } = require("sequelize");
const sequelize = require('../db');

//Defining Allergen model
const Allergen = sequelize.define('Allergen', {
    kind: {
        type: DataTypes.STRING,
        allowNull: false, //An allergen should have a relation to what kind of allergen it falls under (peanut, dairy)
        defaultValue: "Unknown", //Default value if not specified
    },
    substitute: {
        type: DataTypes.STRING,
        allowNull: true, //Allow null values since not all allergens can be substituted
        defaultValue: null, //Default value if not specified
    },
});

module.exports = Allergen;