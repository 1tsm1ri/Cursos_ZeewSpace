const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parseURL = url.parse(req.url, true)
    const path = parseURL.pathname

    if(path == '/' && req.method == 'GET') {
        res.end(JSON.stringify ({
            message: 'Hola mundo'
        }))
    } else if(path == '/api/users' && req.method == 'GET') {
        res.end(JSON.stringify ([
            {
                id: 1,
                name: 'Mary'
            }
        ]))
    }
})

server.listen(3000, () => {
    console.log("API PRENDIDA");
})