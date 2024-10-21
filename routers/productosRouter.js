// Importar express
const express = require("express");

// Llamar a la clase router de express
const router = express.Router();

// Importar las funciones desde el controlador productosController
const { getProductos,
        getProductoById,
        createProducto,
        updateProducto,
        deleteProducto
 } = require("../controllers/productosController.js");

// Obtener todos los productos
router.get("/productos", getProductos);

// Obtener un producto por ID
router.get("/producto/:id", getProductoById);

// Crear un nuevo producto
router.post("/producto", createProducto);

// Actualizar un producto existente por ID
router.put("/producto/:id", updateProducto);

// Eliminar un producto por ID
router.delete("/producto/:id", deleteProducto);

// Exportar el router
module.exports = router;