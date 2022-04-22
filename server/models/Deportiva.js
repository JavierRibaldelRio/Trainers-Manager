/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 *  
 */
const { Schema, model } = require('mongoose'); //Importa la libreria de Mongo

//Creación del esquema

var deportivasEsquema = new Schema({

    id: { type: Number, required: true, uniqued: true },    //Id Ejemplo 1
    marca: { type: String },                                //Nike
    modelo: { type: String },                               //Nike 2000
    observaciones: { type: String },                        //Son una edición limitada
    talla: { type: Number },                                //41
    fechaDeJubilacion: { type: Date }
});

//Exporta el modelo del esquema
module.exports = model('Deportiva', deportivasEsquema);