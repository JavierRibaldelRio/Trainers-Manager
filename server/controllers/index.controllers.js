/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */




const { query } = require('express');
const Deportiva = require('../models/Deportiva');       //Importa el esquema de la deportiva
const errorServidor = require('../scripts/Error');
const { MARCA, MODELO, TALLA, FECHADEJUBILACION } = require('../scripts/keywords');

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

            errorServidor(err, res);
        }
        else {


            res.status(200);

            console.info('Se ha escrito correctamente en la bade de datos.');

            var mensaje = 'Se ha registrado correctamente la zapatilla';

            res.json(mensaje);

        };
    });
}

//Función de /search
controller.search = (req, res) => {

    const busqueda = crearQuery(req.body);      //Crea la busqueda

    buscar(busqueda);       //Busca con busqueda


    //Funciones

    //Función que crea la query y la devuelve
    function crearQuery(body) {

        //Almacena la query
        var query = {};

        //Se le introduce una propiedad y en caso de que exista la añade a la query con su valor
        var anyadirAQuery = (prop) => {

            if (body[prop]) {
                query[prop] = body[prop];
            }
        }

        //Funcion que añade a la query en caso que exista una peopiedad

        anyadirAQuery(MARCA);
        anyadirAQuery(MODELO);
        anyadirAQuery(TALLA);
        anyadirAQuery(FECHADEJUBILACION);

        return query;   //Devulve la query
    }

    //Busca por zapatillas segun la query
    function buscar(query = {}) {
        Deportiva.find(query, (err, deportivas) => {

            if (err) {

                errorServidor(err, res);
            } else {

                res.status(200);

                res.json(deportivas);

            }

        });
    }

}

//Exporta el controlador
module.exports = controller;