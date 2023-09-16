
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

function editarContacto (contactoId) {
    const contactoIndice = contactos.findIndex(item => item.id === contactoId )
    contactos[contactoIndice] = {}
}

function actualizarContacto(id, nuevoContacto) {
    const index = contactos.findIndex(contactos => contactos.id === id);

    if (index !== -1) {
    contactos[index] = { ...contactos[index], ...nuevoContacto };
    console.log("Contacto actualizado:", contactos[index]);
    } else {
    console.log("Contacto no encontrado con el ID:", id);
    }
}

function buscarContacto(contactoId) {
    let contactoEncontrado = contactos.filter ((item) => item.id === contactoId);
    return contactoEncontrado[0]
}

function imprimirContactos (){
    return contactos
}

module.exports = { agregarContacto, borrarContacto, buscarContacto, imprimirContactos, actualizarContacto}