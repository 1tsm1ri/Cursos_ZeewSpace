const express = require('express')
const app = express()


// MIDDLEWARE
/* Hace algo antes de que llegue la peticion real (informacion)
El orden de los middlewares es importante, ya que se ejecuta en serie 
El "next" sirve para pasar al siguiente middle ware */
app.use ((req, res, next) => {
    next()
})
app.use(express.json())


/* Tipos de Metodos
GET = Pedir informacion
POST = Enviar informacion
PUT = Actualizar todo
PATCH = Actualizar algo especifico
DELETE = Eliminar algo */


// MIDDLEWARE DE ERRORES
app.use((req, res, next) => {
    res.status(404)
    const error = new Error(`No se encontro el endpoint ${req.originalUrl}`)
    next(error)
})
app.use ((err, req, res, next) => {
    console.log(err?.stack || err.message)
    res.json({
        error: err.message
    })
})

app.listen(3000, () => {
    console.log('API prendida');
})

