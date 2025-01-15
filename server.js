import http from 'http';

const server = http.createServer((req, res) => {

res.write("Hi")
res.end()

})

server.listen(5000)
console.log('server listens on port: 5000');