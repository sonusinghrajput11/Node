const express = require('express');
var path = require("path");

const app = express();

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

const players = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Kohli" },
    { id: 3, name: "Rahane" },
    { id: 4, name: "Dhoni" }
]

app.get('/api/players', (req, res) => {
    res.send(players);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});