// Controlador para indexPage
const getIndexPage = (req, res) => {
    res.render("index", 
        {
            titulo: "Este es el titulo del index",
            mensaje: "Hola mundo desde index"
        }
    );
};

// Exportar la funcion
module.exports = { getIndexPage }