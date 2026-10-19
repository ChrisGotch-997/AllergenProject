
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const secretKey = your_secret_key; // replace later with an actual secret key


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, secretKey, (err, user) => {
     if (err)   return res.sendStatus(403); // if the token is invalid

     req.user = user; // attach the user object to the request
     next();
    });


}
