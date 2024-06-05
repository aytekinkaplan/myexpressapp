const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("${req.method}, ${req.url}");
    next();
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log(`Example app listening on port: http://localhost:${port}`);
});
