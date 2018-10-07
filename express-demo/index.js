const Joi = require('joi');  //Joi is validation framework
const express = require('express');

const app = express();
app.use(express.json());

const players = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Kohli" },
    { id: 3, name: "Rahane" }
]

app.get('/api/players', (req, res) => {
    res.send(players);
});

app.get('/api/players/:id', (req, res) => {
    let playerId = req.params.id
    const player = players.find(player => player.id === parseInt(playerId));

    if (!player) return res.status(400).send(`Player not found with given id : ${playerId}`);
    res.send(player);
});

app.post('/api/players', (req, res) => {
    const result = validateCourse(req.body);
    if (result.error) return res.status(400).send(result.error);

    let player = {
        id: players.length + 1,
        name: req.body.name
    }

    players.push(player);
    res.send(player);
});

app.put('/api/players/:id', (req, res) => {
    const playerId = req.params.id
    const player = players.find(player => player.id === parseInt(playerId));

    if (!player) return res.status(400).send(`Player not found with given id : ${playerId}`);

    const result = validateCourse(req.body);
    if (result.error) return res.status(400).send(result.error);

    player.name = req.body.name;
    res.send(player);
});

app.delete('/api/player/:id', (req, res) => {
    const playerId = req.params.id
    const player = players.find(player => player.id === parseInt(playerId));

    if (!player) return res.status(400).send(`Player not found with given id : ${playerId}`);

    const index = players.indexOf(player);
    players.splice(index, 1);

    res.send(player);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Listening on port ${port}...`);
});

function validateCourse(player) {
    //Below commented manual validations logic can be replaced by Joi framework as mentioned below
    /* if(!req.body || req.body.name.length < 3){
        res.status(400).send('Name is required and should be minimum 3 char');
        return;
    } */

    //Schema is an object which cotains validation rules
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(player, schema);
}