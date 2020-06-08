module.exports = rawRequest => {
    const arr = rawRequest.split(' ');
    const [method, path] = arr;
    const body = arr[arr.length - 1];

        if(body.includes('\r')) {
        return {
            method: method,
            path: path,
            body: body.substring(
                body.lastIndexOf('{'),
                body.lastIndexOf('}') + 1
            )
            };
    } else {
        return {
            method: method,
            path: path
            };
    }    
};
