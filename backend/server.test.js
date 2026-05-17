import request from 'supertest';
import app from './server.js';

describe('GET /api/tasks', () => {
    it('should return a list of tasks', async() => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});