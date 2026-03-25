import http from 'http'
import getPost from './postController.js'

const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end('<h1>Home Page</h1>')
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end('<h1>About</h1>')
    } else {
        res.writeHead(500, {'Content-Type' : 'text/html'})
        res.end('<h1>Page not found</h1>')
    }
})

server.listen(port, (() => {
    console.log(`Server is running on port ${port}`)
}))