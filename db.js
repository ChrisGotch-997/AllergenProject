//Import modules
//Sequelize = orm, DataTypes defines data types for table columns.
const { Sequelize, DataTypes } = require('sequelize');

//Connection to DB
//Creates new SQlite db file named allergen.db
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'allergen.db',
});

module.exports = sequelize;