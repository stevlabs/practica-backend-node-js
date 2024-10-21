// Importar mongoose
const mongoose = require("mongoose");

// Funcion para conectar con mongodb
const dbConnection = async () => {
    try {
        // Cnectar usando la URI de .env
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conexion ok");
        return connection
    } catch (error) {
        console.log("Error en la conexion: ", error);
    }
};

// Exportar funcion
module.exports = dbConnection;