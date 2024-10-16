// Tipos de servicios
const productos = [
    { nombre: "Productos 1", descripcion: "Descripcion 1" },
    { nombre: "Productos 2", descripcion: "Descripcion 2" },
    { nombre: "Productos 3", descripcion: "Descripcion 3" }
];

// Funcion para obtener los diferentes servicios
const getProductosPage = (req, res) => {
    res.render("productos", 
        { 
            titulo: "Productos", 
            mensaje: "Hola desde productos", 
            productos 
        }
    );
};

// Exportar la funcion
module.exports = { getProductosPage };