/**
 * Devuelve la página de inicio de la API con un mensaje de bienvenida.
 * 
 * @param {Object} req - Objeto solicitud.
 * @param {Object} res - Objeto respuesta.
 */
const getIndexPage = (req, res) => {
    res.send("<h1>Bienvenido a la API</h1>");
};

// Exportar la función
module.exports = { getIndexPage };
