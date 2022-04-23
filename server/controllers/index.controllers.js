/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

const Deportiva = require('../models/Deportiva');       //Importa el esquema de la deportiva

require('../connection');         //Activa las conexiones

//Almacenará todas las funciones del controlador
const controller = {};

//Función de /
controller.index = (req, res) => {

    res.send('HOLA QUE TAL');
}

//Función de /add
controller.add = (req, res) => {

    var newDeportiva = new Deportiva({
        marca: 'Canon',
        modelo: 'Reflex',
        observaciones: 'Esto es caro',
        talla: 44,
        fechaDeJubilacion: new Date(2006, 5, 11)

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

//Exporta el controlador
module.exports = controller;