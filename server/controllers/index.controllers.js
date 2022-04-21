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

    res.send('HOLA QUE TAL desde la api');
}

module.exports = controller;