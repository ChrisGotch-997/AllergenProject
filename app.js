//Setup express and start server setup
//Imported libraries
const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT  = 3000;

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Secured with helmet");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});