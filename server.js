const express = require('express');
const pizzaRouter = require('./routes/pizzaRouter')
const server = express();
server.use(express.json());
server.use('/pizza', pizzaRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "yay!"});
})

module.exports = server