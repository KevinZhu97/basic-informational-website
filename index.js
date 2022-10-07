const http = require('http')
const fs = require('fs')
 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', function(err, data) {
            if (err) {
                console.log(err)
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            return res.end(data);
        })
    }
    else if (req.url==='/about') {
        fs.readFile('about.html', 'utf8', function(err, data) {
            if (err) {
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            return res.end(data);

        })
    }
    else if (req.url==='/contact-me') {
        fs.readFile('contact-me.html', 'utf8', function(err, data) {
            if (err) {
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            return res.end(data);

        })
    }
    else {
        fs.readFile('404.html', 'utf8', function(err, data) {
            if (err) {
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data);

        })
    }
})

server.listen(8080, () => {
    console.log("Server started! Listening in port 8080.")
});