const Deportiva = require('../models/Deportiva');

/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */
const controller = {};

controller.index = (req, res) => {

    res.send('HOLA QUE TAL');
}

controller.api = (req, res) => {

    const mongoose = require('mongoose');       //Importa Mongoose

    require('dotenv').config();                 //Activa dotenv

    // const URI = process.env.URI_MONGO;          //Importa el uri

    const URI = 'mongodb://localhost:27017/trainers';

    //Crea la conexión a Mongoose
    mongoose.connect(URI)
    var newDeportiva = new Deportiva({
        id: -1,
        marca: 'Nike',
        modelo: 'Nike - 80',
        observaciones: 'Esto es Nike',
        talla: 43,
    });


    newDeportiva.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error: ' + err);
        }
        else {
            res.send('Hola, he funciionado');
        }
    });



}

module.exports = controller;