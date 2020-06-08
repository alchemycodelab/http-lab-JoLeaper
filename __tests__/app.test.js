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
        });
    });


    // HTTP/1.1 200 OK
// Accept-Ranges: bytes
// Content-Length: 17
// Content-Type: text/html

// <h1>hi there</h1>
    it('handles the /echo route', () => {
        return request(app)
            .post('/echo')
            .send('peanut butter')
            .then(res => {
                expect(res.text).toEqual('peanut butter');
                expect(res.status).toEqual(200);
            });
    });

    // it('handles the /red route', () => {
    //     return request(app)
    //     .get('/red')
    //     .then(res => {
    //         expect(res.something).toEqual('<h1>red</h1>');
    //     });
    // });

    // it('handles the /green route', () => {
    //     return request(app)
    //     .get('/green')
    //     .then(res => {
    //         expect(res.something).toEqual('<h1>green</h1>');
    //     });
    // });

    // it('handles the /blue route', () => {
    //     return request(app)
    //     .get('/blue')
    //     .then(res => {
    //         expect(res.something).toEqual('<h1>blue</h1>');
    //     });
    // });
});
