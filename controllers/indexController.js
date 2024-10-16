// Controlador para indexPage
const getIndexPage = (req, res) => {
    res.render("index", 
        {
            titulo: "Principal",
            mensaje: "Hola mundo desde index"
        }
    );
};

// Exportar la funcion
module.exports = { getIndexPage }