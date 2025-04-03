const express = require('express')
const app = express()

/* Tipos de Metodos
GET = Pedir informacion
POST = Enviar informacion
PUT = Actualizar todo
PATCH = Actualizar algo especifico
DELETE = Eliminar algo */

// get = metodo = tipo de peticiones 
// '/' = path/endpoint = ruta a conseguir 
// req = solicitar algo = req.body / req.params
// res = dar respusta = res.json([...]) / res.statusCode(200) / res.setHeader('Content-Type')
app.get('/',(req,res) => {
    res.json ({
        message: 'Hola Mundo'
    })
})

app.post('/', (req, res) => {
    res.json({
        method: req.method,
        body: req.body
    });
});

app.patch('/', (req, res) => {
    res.json({
        method: req.method,
        body: req.body,
    });
});

app.delete ('/', (req, res) => {
    res.json ({
        method: req.method,
        body: req.body,
    });
});

app.listen(3000, () => {
    console.log('API prendida');
})