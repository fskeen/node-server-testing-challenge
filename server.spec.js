const request = require('supertest');
const server = require('./server');
const db = require('./data/dbConfig');


describe('GET /', () => {
    it('returns 200 OK', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })

}) // WORKING!!

describe('GET /pizza', () => {
    it('returns 200 OK', () => {
        return request(server)
            .get('/pizza')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })

    it('returns message PIZZA', () => {
        return request(server)
            .get('/pizza')
            .then(res => {
                expect(res.body.length).toBe(0);
            })
    })

}) // WORKING!!

// describe('POST /pizza', () => {
//     beforeEach(async () => {
//         await db('pizzas').truncate();
//     })

//     it('returns 200 OK', () => {
//         const pizza = {name: "Garlic Chicken Delight"}
//         return request(server)
//             .post('/pizza')
//             .send(pizza)
//             .then(res => {
//                 expect(res.status).toBe(201);
//             })
//     })

//     it('adds a pizza to the db', () => {
//         const pizza = {name: "Garlic Chicken Delight"}
//         return request(server)
//             .post('/pizza', pizza)
//             .then(res => {
//                 expect(res.status).toBe(201);
//             })
//     })
// })