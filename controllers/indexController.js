// Controlador para la ruta del index
const getIndexPage = (req, res) => {
    res.send("<h1>Bienvenido a la API</h1>");
};

// Exportar la función
module.exports = { getIndexPage };
