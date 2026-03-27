import http from 'http';
const port = process.env.PORT || 8080;

const users = [
    {id: 1, user: 'John Doe'},
    {id: 2, user: 'Jane Doe'}
]

const server = http.createServer((req, res) => {
    if(req.url == '/api/users'){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    }
})

server.listen(port, () => console.log(`Server2 Running on port: ${port}`))