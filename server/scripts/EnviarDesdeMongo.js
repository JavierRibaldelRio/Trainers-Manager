/**
 * 
 * Envia toda la base, si se le introduce query la utiliza
 * 
*/
const Deportiva = require('../models/Deportiva');       //Importa el esquema de la deportiva
const ordenar = require('../scripts/Ordenar');

function enviarDeBase(res, query = {}) {
    Deportiva.find(query, (err, deportivas) => {

        if (err) {

            errorServidor(err, res);

        } else {

            res.status(200);

            ordenar(deportivas)

            res.json(deportivas);
        }
    });
}

module.exports = enviarDeBase;
