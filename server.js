import http from 'http';

const server = http.createServer((req, res) => {



res.end()

})

server.listen(5000)
console.log('server listens on port: 5000');
