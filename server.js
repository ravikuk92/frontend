const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const sqlite3 = require('sqlite3').verbose();

// Initialize the database
const db = new sqlite3.Database('./user_data.db');

// Create table if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        age INTEGER
    )`);
});

// Serve the HTML page and handle form submission
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const postData = querystring.parse(body);
            db.run('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', 
                [postData.name, postData.email, postData.age], 
                (err) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Error saving data');
                    } else {
                        res.writeHead(200);
                        res.end('Data submitted successfully!');
                    }
                }
            );
        });
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});