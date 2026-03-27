import http from 'http'
const port = process.env.PORT || 8080

const user = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'}
]

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(port)