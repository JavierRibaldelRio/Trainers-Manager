/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

const express = require('express');

require('dotenv').config()              //Activa el .env

const app = express();

const PORT = process.env.PORT | 3001

//Importa las rutas

//Index
const index = require('./routes/index.routes');     //Importo la ruta

app.use(index);                                     //La activo

app.listen(PORT, () => {

    console.log('Hola, este es el puerto ' + PORT);
});