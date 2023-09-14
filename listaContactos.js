
let contactos = [{
    id: 1,
    nombre: "Camilo",
    esSoltero: false
},
{
id: 2,
nombre: "Sara",
esSoltero: true},
];

function agregarContacto (nuevoContacto) {
    contactos.push(nuevoContacto)
}

function borrarContacto (contactoId) {
let nuevosContactos = contactos.filter(
    (contacto) => contacto.id !== contactoId
    );
    contactos = nuevosContactos;
}

function buscarContacto(contactoId) {
    let contactoEncontrado = contactos.filter ((item) => item.id === contactoId);
    return contactoEncontrado[0]
}

function imprimirContactos (){
    return contactos
}

module.exports = { agregarContacto, borrarContacto, buscarContacto, imprimirContactos}