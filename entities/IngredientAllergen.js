
//Need a join model between Ingriedent and allergy

const sequelize = require('../db');

//table to join
const IngredientAllergen = sequelize.define('IngredientAllergen', {});

module.exports = IngredientAllergen;