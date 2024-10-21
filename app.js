// Importar express, dotenv y la conexion a mongo
const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./utils/dbConnection");

// Leer archivo .env
dotenv.config();

// Conexion a mongo
dbConnection();

const app = express();

// Definir puerto
const port = process.env.PORT || 3000; 

// Importar los routers
const indexRouter = require("./routers/indexRouter");
const serviciosRouter = require("./routers/serviciosRouter");
const productosRouter = require("./routers/productosRouter");

// Para recibir JSON
app.use(express.json());
 // Para datos de formularios
app.use(express.urlencoded({ extended: true }));

// Usar el router de índice
app.use("/", indexRouter);

// Usar los routers de servicios y productos
app.use("/api/v1", serviciosRouter, productosRouter);

// Iniciar servidor
app.listen(port, () => {
    console.log(`APP a la escucha desde http:localhost:${port}`);
});