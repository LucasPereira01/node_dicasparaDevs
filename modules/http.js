const http = require('http');
const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1> Home page</h1>')
    }

    if (req.url == '/users') {
        const user = [
            {
                nome: "Lucas",
                email: "lucas@gmail.com"
            },
            {
                nome: "pedro",
                email: "pedro@.com"
            },
            {
                nome: "juca",
                email: "jucas@.com"
            },
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(user))
    }
})
server.listen(port, () => console.log('Rodando na Porta ' + port))
