const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    const { method, path, body } = request;

    if(path === '/') {
      const newBody = 'hi';
      socket.end(createResponse({ body: newBody, contentType: 'text/plain' }));
    } else if(path === '/echo') {
      socket.end(createResponse({ body: body, status: '200', contentType: 'text/plain' }));
    // } else if() {
    // } else if() {
    // } else if() {

    } else {socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
    
  });
});

module.exports = app;
