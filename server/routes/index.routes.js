/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

const express = require('express');     //Importa express

const router = express.Router();        //Activa el enrutador

const controller = require('../controllers/index.controllers');     //Importa los controladores

//Activa para poder sacar información del método post
router.use(express.urlencoded({ extended: true }));;
router.use(express.json());

//Activa dotas las cabeceras
router.use(controller.cabeceras);


router.get('/', controller.index);

router.post('/add', controller.add);

router.post('/search', controller.search);

router.get('/all', controller.all);

module.exports = router;    //Exporta el router