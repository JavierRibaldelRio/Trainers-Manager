/**
 * 
 * Envia toda la base, si se le introduce query la utiliza
 * 
*/
const Deportiva = require('../models/Deportiva');       //Importa el esquema de la deportiva


function enviarDeBase(res, query = {}) {
    Deportiva.find(query, (err, deportivas) => {

        if (err) {

            errorServidor(err, res);

        } else {

            res.status(200);

            res.json(deportivas);
        }
    });
}

module.exports = enviarDeBase;