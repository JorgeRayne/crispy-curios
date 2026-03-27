import http from 'http';
import fs from 'fs/promises';
import url  from 'url';
import getPost from './postController.js';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const port = process.env.PORT
const server = http.createServer(async (req, res) => {
    try {
        let filePath;
        if(req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html')
        } else if(req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html')
        } else {
            throw new Error('File not Found')
        }
        const data = await fs.readFile(filePath)
        console.log(data)
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end()
    } catch (error) {
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Server Error</h1>')
    }
})

server.listen(port, (() => {
    console.log(`Server is running on port ${port}`)
}))