const express = require('express');
const db = require('./pizzaModel');

const router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {
    db.getPizza()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "Nope!!!"})
        });
})

router.post('/pizza', (req, res) => {
    const pizza = req.body
    db.addPizza(pizza)
        .then(id => {
            res.status(201).json(id)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "everything sucks"})
        })
})

// router.delete('/toppings', (req, res) => {
//     return
// })

module.exports = router