const express = require("express");
const app = express();
const port = 3000;

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

app.get('/help', (req, res) => {
    res.send("Help Page");
});

app.post('/signup', (req, res) => {
    res.send("Signup Page");
});

app.post('/login', (req, res) => {
    res.send("Login Page");
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/help/*', (req, res) => {
    res.send("Help Article Not Found");
});

app.get('/about/*', (req, res) => {
    res.send("About Article Not Found");
});

app.get('/*', (req, res) => {
    res.send("Page Not Found");
});

app.listen(port, () => {
    console.log(`Example app listening on port: http://localhost:${port}`);
});
