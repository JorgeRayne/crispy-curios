import http from 'http';
import fs from 'fs/promises';
import url  from 'url';
import getPost from './postController.js';
import path from 'path';

const __fileName = url.fileURLToPath(import.meta.filename);
const __dirName = path.dirname(__fileName)

const port = process.env.PORT
const server = http.createServer((req, res) => {
    try {
        let filePath;
        if(req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html')
        } else if(req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html')
        } else {
            throw new Error('File not Found')
        }
    } catch (error) {
        throw new Error('Server Error')
    }
})

server.listen(port, (() => {
    console.log(`Server is running on port ${port}`)
}))