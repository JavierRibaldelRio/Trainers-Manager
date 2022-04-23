/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 *  
 */
const { Schema, model } = require('mongoose'); //Importa la libreria de Mongo

var deportivasEsquema = new Schema({

    id: { type: Number, required: true, uniqued: true },    //Id Ejemplo 1
    marca: String,                                //Nike
    modelo: String,                               //Nike 2000
    observaciones: String,                       //Son una edición limitada
    talla: Number,                               //41
    fechaDeJubilacion: Date
})



//Exporta el modelo del esquema
module.exports = model('Deportiva', deportivasEsquema);