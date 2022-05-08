// Usando objeto express
const express = require('express')

// App de Express
const app = express()

app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP METHODS
// GET: Obtener datos
// POST: Crear datos
// PUT: Actualizar datos
// DELETE: Eliminar datos
// PATCH: Actualizar datos
// HEAD: Obtener cabeceras
// OPTIONS: Obtener opciones
// TRACE: Obtener traza
// CONNECT: Conectar

// Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer1 = {id: 1, name: "Ricardo"}
    const explorer2 = {id: 2, name: "Osiris"}
    const explorer3 = {id: 3, name: "Fany"}
    const explorer4 = {id: 4, name: "Napoleon"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
  });


// Creando un explorer que se regrese mediante el ID
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Ricardo"}
    res.status(200).json(explorer)
  });



// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});