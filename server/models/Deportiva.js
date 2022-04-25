/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 *  
 */
const { Schema, model } = require('mongoose'); //Importa la libreria de Mongo

//Crea el esquema de las deportivas

var deportivasEsquema = new Schema({

    marca: String,              //Nike
    modelo: String,             //Nike 2000
    talla: Number,              //41
    fechaDeJubilacion: Date,    //2006-5-21
    observaciones: String       //Son una edición limitada

})



//Exporta el modelo del esquema
module.exports = model('Deportiva', deportivasEsquema);