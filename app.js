//Setup express and start server setup
//Imported libraries
const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT  = 3000;
const sequelize = require('./db'); //connection to our db. file
require('./relationships'); //this will load our entities and connect them with their relationship


app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Secured with helmet");
});

//Sync relationships, create/Update tables, then start the server.
sequelize.sync({
    alter: true
}).then(() =>{
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`);
    });

});