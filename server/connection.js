/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 *  
 */

const mongoose = require('mongoose');       //Importa Mongoose

require('dotenv').config();                 //Activa dotenv

const URI = process.env.URI_MONGO;          //Importa el URI

//Crea la conexión a Mongoose
mongoose.connect(URI);

var db = mongoose.connection;               //Crea la conexión de la db  

//En caso de error lo muestra
db.on('error', (err) => {
    console.error('connection error', err);
});

//Si la conexión es correcta se muestra mensaje
db.once('open', () => {
    console.info('Conexión a mongo correcta');
});