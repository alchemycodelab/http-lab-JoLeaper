const request = require('supertest');
const app = require('../lib/app');
// res.body => JSON
// res.text => text

describe('createResponse', () => {
    it('handles the / route', () => {
        return request(app)
        .get('/')
        .then(res => {
            expect(res.something).toEqual('hi');
        });
    });

    it('handles the /echo route', () => {
        return request(app)
        .post('/echo')
        .then(res => {
            expect(res.text).toEqual('');
        });
    });

    it('handles the /red route', () => {
        return request(app)
        .get('/red')
        .then(res => {
            expect(res.something).toEqual('<h1>red</h1>');
        });
    });

    it('handles the /green route', () => {
        return request(app)
        .get('/green')
        .then(res => {
            expect(res.something).toEqual('<h1>green</h1>');
        });
    });

    it('handles the /blue route', () => {
        return request(app)
        .get('/blue')
        .then(res => {
            expect(res.something).toEqual('<h1>blue</h1>');
        });
    });
});
