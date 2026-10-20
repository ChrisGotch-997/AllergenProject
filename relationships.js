// Defining entity relationships
// Our relationships need correct paths
const User = require('./entities/User');
const Allergen = require('../Allergens');
const MenuItem = require('../MenuItem');
const Ingredient = require('../Ingredient');
const IngredientAllergen = require('./entities/IngredientAllergen');
const MenuItemIngredient = require('./entities/MenuItemIngredient');

//User to Allergy (many to many)
User.belongsToMany(Allergen, {
    through: 'UserAllergens', //Our joiner table
    foreignKey: 'userID',
    otherKey: 'allergenID'
});

//Allergy to User (many to many)
Allergen.belongsToMany(User, {
    through: 'UserAllergens', //Our joiner table
    foreignKey: 'allergenID',
    otherKey: 'userID'
 });


 //Menu Item to Ingredients through MenuItemIngredient
 MenuItem.hasMany(MenuItemIngredient, {
    foreignKey: 'menuItemID',
    onDelete: 'CASCADE'
 });
 MenuItemIngredient.belongsTo(MenuItem, {
   foreignKey: 'menuItemId'
 });


 Ingredient.hasMany(MenuItemIngredient, {
    foreignKey: 'ingredientId',
    onDelete: 'CASCADE'
 });
 MenuItemIngredient.belongsTo(Ingredient, {
   foreignKey: 'ingredientId'
 });

 //Menu items to Allergen (Many to many)
 MenuItem.belongsToMany(Allergen, {
    through: 'MenuItemAllergen', //our joiner table
    foreignKey: 'menuitemID',
    otherKey: 'allergenID'
 });

 Allergen.belongsToMany(MenuItem, {
    through: 'MenuItemAllergen', //Our joiner table
    foreignKey: 'allergenID',
    otherKey: 'menuitemID'
 });

 //Ingredient to allergen (Many to one) through IngredientAllergen
 Allergen.hasMany(Ingredient, {
    foreignKey: 'allergenID',
    onDelete: 'CASCADE' 
 });
 IngredientAllergen.belongsTo(Allergen, {
   foreignKey: 'allergenId'
 });

 Ingredient.hasMany(IngredientAllergen, {
   foreignKey: 'ingredientId',
   onDelete: 'CASCADE'
 });
 IngredientAllergen.belongsTo(Ingredient, {
    foreignKey: 'ingredientID'
 });


 //Due to file structure, we need to export the code so it can be used across the program.
module.exports = { User, Allergen, MenuItem, Ingredient, IngredientAllergen, MenuItemIngredient };