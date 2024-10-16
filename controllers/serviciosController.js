// Tipos de servicios
const servicios = [
    { nombre: "Servicio 1", descripcion: "Descripcion 1" },
    { nombre: "Servicio 2", descripcion: "Descripcion 2" },
    { nombre: "Servicio 3", descripcion: "Descripcion 3" }
];

// Funcion para obtener los diferentes servicios
const getServiciosPage = (req, res) => {
    res.render("servicios", 
        { 
            titulo: "Servicios", 
            mensaje: "Hola desde servicios", 
            servicios 
        }
    );
};

// Exportar la funcion
module.exports = { getServiciosPage };