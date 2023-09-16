
const express = require("express");
const contactoRouter = express.Router();
const contactos = require("./listaContactos")

contactoRouter
.get ("/", (req, res)=> {
    res.json(contactos.imprimirContactos())
})
    .get ("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(contactos.buscarContacto(id))
})
    .post("/", (req, res) => {
    contactos.agregarContacto(req.body)
    res.json({
        status: 200,
        menssage: "cotacto creado",
        data: req.body
    })
}).put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    contactos.actualizarContacto(id, req.body)
    res.json({
        status: 200,
        message: `Contacto editado con id ${req.params.id} fue editado exitosamente`,
        // data: req.body
    })
}).delete("/:id",(req, res) => {
    const id = parseInt(req.params.id)
    res.json ({
        status: 200,
        message: "contacto borrado",
        data: req.body
    })
    contactos.borrarContacto(id)
})




module.exports = contactoRouter;
