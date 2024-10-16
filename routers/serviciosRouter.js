// Importar express
const express = require("express");
// Llamar a la clase router de express
const router = express.Router();
// Importar la funcion getIndexPage desde el controlador indexController
const { getServiciosPage } = require("../controllers/serviciosController.js");
// Definir ruta GET para "/"
router.get("/", getServiciosPage);
// Exportar el router
module.exports = router;