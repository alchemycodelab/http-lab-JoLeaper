module.exports = rawRequest => {
    const arr = rawRequest.split(' ');
    const [method, path] = arr;
    const body = rawRequest.split('\r\n\r\n')[1];
        if(body) {
            return {
                method: method,
                path: path,
                body: body
            };
        } else {
            return {
                method: method,
                path: path
            };
        }  
};
