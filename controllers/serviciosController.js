// Importar modelo Servicio
const Servicio = require("../models/servicioModel");

// Obtener todos los productos
const getServicios = async (req, res) => {
    try {
      const servicios = await Servicio.find();
      return res.status(200).json({
            ok: true,
            total_servicios: servicios.length,
            data: servicios
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};
  
// Obtener un producto por ID
const getServicioById = async (req, res) => {
    try {
        const id = req.params.id
        const servicio = await Servicio.findById(id);
        if (!servicio) return res.status(404).json({
             msg: "Servicio no encontrado" 
        });
        return res.status(200).json({
            ok: true,
            servicio
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: "Error, contacta con el administrador" 
        });
    }
};
  
// Crear un nuevo producto
const createServicio = async (req, res) => {
    try {
        const nombre = req.body.nombre
        const descripcion = req.body.descripcion
        const nuevoServicio = new Servicio({ nombre, descripcion });
        const servicioSalvado = await nuevoServicio.save();
        return res.status(201).json({
            ok: true,
            servicioSalvado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};
  
// Actualizar un producto existente por ID
const updateServicio = async (req, res) => {
    try {
        const id = req.params.id
        const nombre = req.body.nombre
        const descripcion = req.body.descripcion
        const servicioActualizado = await Servicio.findByIdAndUpdate(
            id,
            { nombre, descripcion},
            { new: true }
        );
        if (!servicioActualizado) return res.status(404).json({ 
            msg: "Servicio no encontrado" 
        });
        return res.status(200).json({
            ok: true,
            servicioActualizado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            ok: false, 
            error: "Error, contacta con el administrador" 
        });
    }
};
  
// Eliminar un producto por ID
const deleteServicio = async (req, res) => {
    try {
        const id = req.params.id
        const servicioEliminado = await Servicio.findByIdAndDelete(id, { new: true });
        if (!servicioEliminado) return res.status(404).json({
             msg: "Servicio no encontrado" 
        });
        return res.status(200).json({ 
            mensaje: "Servicio eliminado correctamente", 
            servicioEliminado 
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
    getServicios,
    getServicioById,
    createServicio,
    updateServicio,
    deleteServicio 
};