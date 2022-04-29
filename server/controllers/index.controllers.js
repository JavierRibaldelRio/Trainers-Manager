/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

const Deportiva = require('../models/Deportiva');       //Importa el esquema de la deportiva

require('../connection');         //Activa las conexiones

//Almacenará todas las funciones del controlador
const controller = {};


//Middlw ware function

controller.cabeceras = (req, res, next) => {
    //Incluye las cabeceras necesarias del servidor
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

//Función de /
controller.index = (req, res) => {

    res.send('HOLA QUE TAL');
}

//Función de /add
controller.add = (req, res) => {

    //Almacena la trainer subida

    const tra = req.body;

    //Almacena la fecha
    const fecha = Date();

    tra.fechaCreacion = fecha;  //La fecha de creación la hace igual a la fecha de hoy
    tra.ultimoCambio = fecha;

    const zapatoASubir = new Deportiva(tra);

    zapatoASubir.save((err) => {
        if (err) {
            res.status(500);

            //Almacena el mensaje de error del Mongodb
            const mensajeErr = 'Se ha producido un error en el servidor:  ' + err + "."
            console.error(mensajeErr);

            res.json({ message: mensajeErr });
        }
        else {
            res.status(200);

            console.info('Se ha escrito correctamente en la bade de datos.');

            var mensaje = 'Se ha registrado correctamente la zapatilla';

            res.json(mensaje);

        };
    });
}

//Exporta el controlador
module.exports = controller;