// Importar express
const express = require("express");
const { check, param } = require("express-validator");
// Importar middleware
const validateInputs = require("../middlewares/validarCampos"); 

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
router.get(
    "/servicio/:id", 
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        validateInputs, 
    ], 
    getServicioById
);

// Crear un nuevo servicio
router.post(
    "/servicio",
    [
        check("nombre", "El nombre es obligatorio").trim().notEmpty(),
        check("descripcion", "La descripcion es obligatorio").trim().notEmpty(),
        validateInputs
    ], 
    createServicio
);

// Actualizar un servicio existente por ID
router.put(
    "/servicio/:id",
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        check("nombre", "El nombre es obligatorio").trim().notEmpty(),
        check("descripcion", "La descripcion es obligatorio").trim().notEmpty(),
        validateInputs
    ], 
    updateServicio
);

// Eliminar un servicio por ID
router.delete(
    "/servicio/:id",
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        validateInputs, 
    ], 
    deleteServicio
);

// Exportar el router
module.exports = router;