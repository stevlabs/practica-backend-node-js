// Importar modelo Producto
const Producto = require("../models/productoModel");

/**
 * Obtiene todos los productos de la base de datos.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y todos los productos.
 */
const getProductos = async (req, res) => {
    try {
      const productos = await Producto.find();
      return res.status(200).json({
            ok: true,
            total_productos: productos.length,
            data: productos
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            ok: false, 
            error: "Error al obtener productos" 
        });
    }
};
  
/**
 * Obtiene un producto por su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el producto encontrado.
 */
const getProductoById = async (req, res) => {
    try {
        const id = req.params.id
        const producto = await Producto.findById(id);
        if (!producto) return res.status(404).json({
             msg: "Producto no encontrado" 
        });
        return res.status(200).json({
            ok: true,
            producto
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: "Error, contacta con el administrador" 
        });
    }
};
  
/**
 * Crea un nuevo producto en la base de datos.
 * 
 * @param {Object} req - Información de la solicitud, datos del nuevo producto.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el producto creado.
 */
const createProducto = async (req, res) => {
    try {
        const nombre = req.body.nombre
        const descripcion = req.body.descripcion
        const nuevoProducto = new Producto({ nombre, descripcion });
        const productoSalvado = await nuevoProducto.save();
        return res.status(201).json({
            ok: true,
            productoSalvado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};
  
/**
 * Actualiza un producto existente usando su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el producto actualizado.
 */
const updateProducto = async (req, res) => {
    try {
        const id = req.params.id
        const nombre = req.body.nombre
        const descripcion = req.body.descripcion
        const productoActualizado = await Producto.findByIdAndUpdate(
            id,
            { nombre, descripcion},
            { new: true }
        );
        if (!productoActualizado) return res.status(404).json({ 
            msg: "Producto no encontrado" 
        });
        return res.status(200).json({
            ok: true,
            productoActualizado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};
  

/**
 * Elimina un producto usando su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y un mensaje de confirmación.
 */
const deleteProducto = async (req, res) => {
    try {
        const id = req.params.id
        const productoEliminado = await Producto.findByIdAndDelete(id, { new: true });
        if (!productoEliminado) return res.status(404).json({
             msg: "Producto no encontrado"
        });
        return res.status(200).json({ 
            mensaje: "Producto eliminado correctamente", 
            productoEliminado 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};

// Exportar las funciones
module.exports = { 
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto 
};