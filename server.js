import http from 'http'
import getPost from './postController.js'
const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html'})
    res.end(JSON.stringify(getPost()))
    // res.write('hello word')
    // res.end()
})

server.listen(port)