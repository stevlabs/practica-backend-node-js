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
// const indexRouter = require(__dirname + "/routers/indexRouter");
const serviciosRouter = require("./routers/serviciosRouter");
const productosRouter = require("./routers/productosRouter");

// Para recibir JSON
app.use(express.json());
 // Para datos de formularios
app.use(express.urlencoded({ extended: true }));

// Establecer EJS como motor de plantillas
// app.set("view engine", "ejs");
// Establecer cual va a ser la carpeta de vistas
// app.set("views", __dirname + "/views");

// Middleware para la carpeta public
//app.use(express.static(__dirname + "/public"));

// Usar los routers
//app.use("/api/v1", indexRouter);
app.use("/api/v1", serviciosRouter, productosRouter);
//app.use("/api/v1");

// Iniciar servidor
app.listen(port, () => {
    console.log(`APP a la escucha desde http:localhost:${port}`);
});