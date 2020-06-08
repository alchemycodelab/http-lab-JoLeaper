const request = require('supertest');
const app = require('../lib/app');
// res.body => JSON
// res.text => text

describe('createResponse', () => {
    it('handles the / route', () => {
        return request(app)
        .get('/')
        .then(res => {
            expect(res.text).toEqual('hi');
            expect(res.header['content-type']).toEqual('text/plain');
        });
    });

    it('handles the /echo route', () => {
        return request(app)
            .post('/echo')
            .send('peanut butter')
            .then(res => {
                expect(res.text).toEqual('peanut butter');
                expect(res.header['content-type']).toEqual('text/plain');
                expect(res.status).toEqual(200);
            });
    });

    it('handles the /red route', () => {
        return request(app)
        .get('/red')
        .then(res => {
            expect(res.text).toEqual('<h1>red</h1>');
            expect(res.header['content-type']).toEqual('text/html');
        });
    });

    it('handles the /green route', () => {
        return request(app)
        .get('/green')
        .then(res => {
            expect(res.text).toEqual('<h1>green</h1>');
            expect(res.header['content-type']).toEqual('text/html');
        });
    });

    it('handles the /blue route', () => {
        return request(app)
        .get('/blue')
        .then(res => {
            expect(res.text).toEqual('<h1>blue</h1>');
            expect(res.header['content-type']).toEqual('text/html');
        });
    });

    
    it('handles an error route', () => {
        return request(app)
        .get('/fake')
        .then(res => {
            expect(res.status).toEqual(404);
        });
    });
});
