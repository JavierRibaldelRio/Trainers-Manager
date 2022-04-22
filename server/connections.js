/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 *  
 */

const mongoose = require('mongoose');       //Importa Mongoose

require('dotenv').config();                 //Activa dotenv

const URI = process.env.URI_MONGO;          //Importa el uri

//Crea la conexión a Mongoose
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
