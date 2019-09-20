const request = require('supertest');
const pizzaModel = require('./pizzaModel');
const db = require('../data/dbConfig');

describe('pizza model', () => {
    beforeEach(async () => {
        await db('pizzas').truncate();
    })

    it('should set env to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    }); // WORKING!!

    it('can add pizzas to db', async () => {
        const [id] = await pizzaModel.addPizza({name: "vegetarian"})
        let pizza = await db('pizzas')
            .where({id})
            .first();
        expect(pizza.name).toBe('vegetarian');  
    })

    it('can remove pizzas to db', async () => {
        const [id] = await pizzaModel.addPizza({name: "vegetarian"})
        let pizza2 = await db('pizzas')
        expect(pizza2).toHaveLength(1)

        await pizzaModel.removePizza(id)
        const pizza = await db('pizzas')
        // console.log("pizza post delete", pizza)
        expect(pizza).toHaveLength(0)



        // let pizza = await db('pizzas')
        //     .where({id})
        //     .first();
        // expect(pizza.name).toBe('vegetarian');  
    })
    // it(`doesn't accept invalid data types!`)
}) // WORKING!!