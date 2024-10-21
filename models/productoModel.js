// Importar Schema y model de mongoose
const { Schema, model } = require("mongoose");

// Definir schema de Producto
const ProductoSchema = new Schema({
    nombre: { 
        type: String,
        required: true
    },
    descripcion: { 
        type: String,
        required: true
    }
});

// Exportar el modelo creado
module.exports = model("Productos", ProductoSchema);
