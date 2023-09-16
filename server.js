
const express = require ("express");
const app = express()
const port = 4000
const contactoRouter = require("./contactos")

app.use(express.json())

app.use("/contactos", contactoRouter)

app.get("/", (req, res) => {
    res.send("Ruta raiz")
})

app.listen (port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})
