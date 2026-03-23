import http from 'http'

const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    try{
        if(req.method === 'GET'){
            if(req.url === '/') {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end('<h1>Home Page</h1>')
            } else if(req.url === '/about') {
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end('<h1>About</h1>')
            } else {
                res.writeHead(404, {'Content-Type' : 'text/html'})
                res.end('<h1>Page not found</h1>')
            }
        } else {
            throw new Error('Method not allow')
        }
    } catch (error){
        res.writeHead(500, {'Content-Type' : 'text/plain'})
        res.end('<h1>Server Error</h1>')
    }
})

server.listen(port, (() => {
    console.log(`Server is running on port ${port}`)
}))