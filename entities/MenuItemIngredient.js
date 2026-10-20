//Join table for MenuItems and Ingredients

const sequelize = require('../db');

//table to join
const MenuItemIngredient = sequelize.define('MenuItemIngredient', {});

module.exports = MenuItemIngredient;
