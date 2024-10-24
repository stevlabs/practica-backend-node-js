// Importar modelo Servicio
const Servicio = require("../models/servicioModel");

/**
 * Obtiene todos los servicios de la base de datos.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y todos los servicios.
 */
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
  
/**
 * Obtiene un servicio por su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el servicio encontrado.
 */
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

/**
 * Crea un nuevo servicio en la base de datos.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el servicio creado.
 */
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
  
/**
 * Actualiza un servicio existente usando su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y el servicio actualizado.
 */
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
  
/**
 * Elimina un servicio por su ID.
 * 
 * @param {Object} req - Información de la solicitud.
 * @param {Object} res - Respuesta que se enviará al cliente.
 * @returns {Object} Envía un objeto parseado a JSON con el estado y un mensaje de confirmación.
 */
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