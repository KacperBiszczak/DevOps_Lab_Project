const request = require('supertest');
const app = require('./app');

describe('Testy API', () => {
    test('GET / powinien zwrócić status 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('GET /products powinien zwrócić listę produktów', async () => {
        const response = await request(app).get('/products');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});