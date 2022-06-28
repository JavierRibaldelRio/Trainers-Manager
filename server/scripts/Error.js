/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

function errorServidor(err, res) {

    res.status(500);

    //Almacena el mensaje de error del Mongodb
    const mensajeErr = 'Se ha producido un error en el servidor:  ' + err + "."
    console.error(mensajeErr);

    res.json(mensajeErr);
}

module.exports = errorServidor;