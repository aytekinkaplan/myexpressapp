const express = require('express');
const app = express();
const port = 3000;
const users = require('./users.json');
app.get("/users", (req, res) => {
    res.json(users);
});
app.listen(port, () => {
    console.log(`Example app listening on port: http://localhost:${port}`);
});

