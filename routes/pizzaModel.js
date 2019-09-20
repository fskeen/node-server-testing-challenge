const db = require('../data/dbConfig')

module.exports = {
    addPizza,
    addTopping,
    removeTopping,
    removePizza,
    getPizza
}

function addPizza (pizza) {
    return db('pizzas')
        .insert(pizza, 'id')
}
function addTopping (topping) {
    return db('pizzas')
        .insert(topping, 'id')
}

function removeTopping () {
    return null
}

function getPizza () {
    return db('pizzas')
}
function removePizza (id) {
    return db('pizzas')
        .where('id', id)
        .del()
}