// Importar Schema y model de mongoose
const { Schema, model } = require("mongoose");

// Definir schema de Producto
const ProductoSchema = new Schema({
    nombre: String,
    descripcion: String
});

// Exportar el modelo creado
module.exports = model("Productos", ProductoSchema);
