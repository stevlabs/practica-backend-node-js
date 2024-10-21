// Importar express
const express = require("express");

// Llamar a la clase router de express
const router = express.Router();

// Importar las funciones desde el controlador productosController
const { getServicios,
        getServicioById,
        createServicio,
        updateServicio,
        deleteServicio
 } = require("../controllers/serviciosController.js");

// Obtener todos los servicio
router.get("/servicios", getServicios);

// Obtener un servicio por ID
router.get("/servicio/:id", getServicioById);

// Crear un nuevo servicio
router.post("/servicio", createServicio);

// Actualizar un servicio existente por ID
router.put("/servicio/:id", updateServicio);

// Eliminar un servicio por ID
router.delete("/servicio/:id", deleteServicio);

// Exportar el router
module.exports = router;