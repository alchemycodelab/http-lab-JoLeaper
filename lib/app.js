const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    const { method, path, body } = request;

    if(path === '/') {
      socket.end(createResponse({ body: 'hi', contentType: 'text/plain' }));
    } else if(path === '/echo') {
      socket.end(createResponse({ body: body, status: '200', contentType: 'text/plain' }));
    } else if(path === '/red') {
      socket.end(createResponse({ body: '<h1>red</h1>', contentType: 'text/html' }));
    } else if(path === '/green') {
      socket.end(createResponse({ body: '<h1>green</h1>', contentType: 'text/html' }));
    } else if(path === '/blue') {
      socket.end(createResponse({ body: '<h1>blue</h1>', contentType: 'text/html' }));

    } else {socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
    
  });
});

module.exports = app;
