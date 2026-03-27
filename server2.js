import http from 'http';
const port = process.env.PORT || 8080;

const users = [
    {id: 1, user: 'John Doe'},
    {id: 2, user: 'Jane Doe'}
]

const server = http.createServer((req, res) => {
    if(req.url == '/api/users'){
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users));
        res.end()
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        const user = users.find(user => user.id === parseInt(id))
        res.setHeader('Content-Type', 'application/json')
        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404
            res.write(JSON.stringify({message: 'user not found'}));
        }
        res.end()
    } 
    
    else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode(404)
        res.write(JSON.stringify({message: 'route not found'}))
        res.end()
    }
})

server.listen(port, () => console.log(`Server2 Running on port: ${port}`))