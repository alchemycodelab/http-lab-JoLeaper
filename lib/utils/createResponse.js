module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${body.length}\nContent-Type: ${contentType}\n\n${body}`;
};


// HTTP/1.1 200 OK
// Accept-Ranges: bytes
// Content-Length: 17
// Content-Type: text/html

// <h1>hi there</h1>