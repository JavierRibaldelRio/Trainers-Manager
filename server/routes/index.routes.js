/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

const express = require('express');     //Importa express

const router = express.Router();        //Activa el enrutador

const controller = require('../controllers/index.controllers');     //Importa los controladores

router.get('/', controller.index);

router.get('/api', controller.api);

module.exports = router;    //Exporta el router