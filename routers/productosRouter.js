// Importar express
const express = require("express");
const { check, param } = require("express-validator");
// Importar middleware
const validateInputs = require("../middlewares/validarCampos"); 

// Llamar a la clase router de express
const router = express.Router();

// Importar las funciones desde el controlador productosController
const { 
    getProductos,    
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
} = require("../controllers/productosController.js");

// Obtener todos los productos
router.get("/productos", getProductos);

// Obtener un producto por ID
router.get(
    "/producto/:id",
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        validateInputs, 
    ],
    getProductoById
);

// Crear un nuevo producto
router.post(
    "/producto", 
    [
        check("nombre", "El nombre es obligatorio").trim().notEmpty(),
        check("descripcion", "La descripcion es obligatorio").trim().notEmpty(),
        validateInputs
    ],
    createProducto
);

// Actualizar un producto existente por ID
router.put(
    "/producto/:id",
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        check("nombre", "El nombre es obligatorio").trim().notEmpty(),
        check("descripcion", "La descripcion es obligatorio").trim().notEmpty(),
        validateInputs
    ], 
    updateProducto
);

// Eliminar un producto por ID
router.delete(
    "/producto/:id", 
    [
        param("id", "ID no valido no es un MongoID").isMongoId(),
        validateInputs, 
    ],
    deleteProducto
);

// Exportar el router
module.exports = router;