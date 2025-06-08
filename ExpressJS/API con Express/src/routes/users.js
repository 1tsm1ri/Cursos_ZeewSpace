const { Router } = require("express");
const router = Router()

// get = metodo = tipo de peticiones 
// '/' = path/endpoint = ruta a conseguir 
// req = solicitar algo = req.body / req.params
// res = dar respusta = res.json([...]) / res.statusCode(200) / res.setHeader('Content-Type')

// METODO GET
router.get('/',(req,res) => {
    res.json ({
        message: 'Hola Mundo'
    })
})
// METODO POST
router.post('/', (req, res, next) => {

    const body = req.body
    console.log(body);
    
    if (!body.username) return next(new Error('Tienes que ingresar el nombre'))

    res.json({
        method: req.method,
        body: req.body
    });
});
// METODO PUT
app.put('/', (req, res) => {
    res.json({
        method: req.method,
        body: req.body,
    });
});
// METODO PATCH
app.patch('/', (req, res) => {
    res.json({
        method: req.method,
        body: req.body,
    });
});
// METODO DELETE
app.delete ('/', (req, res) => {
    res.json ({
        method: req.method,
        body: req.body,
    });
});


module.exports = Router