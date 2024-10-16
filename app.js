const express = require("express");
const app = express();
const port = process.env.PORT || 3000; 

// Importar los routers
const indexRouter = require("./routers/indexRouter");
const serviciosRouter = require("./routers/serviciosRouter");

// Establecer EJS como motor de plantillas
app.set("view engine", "ejs");
// Establecer cual va a ser la carpeta de vistas
app.set("views", __dirname + "/views");

// Middleware para la carpeta public
app.use(express.static(__dirname + "/public"));

// Usar los routers
app.use("/", indexRouter);
app.use("/servicios", serviciosRouter);

// Iniciar servidor
app.listen(port, () => {
    console.log(`APP a la escucha desde http:localhost:${port}`);
});