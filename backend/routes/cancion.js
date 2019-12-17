
'use strict'
var app = require ('express');
var cancionController = require('../controllers/cancion')
var multipart = require('connect-multiparty')
var md_upload  = multipart({uploadDir:'./uploads/cancion'})

var api = app.Router();
api.post('/cancion', cancionController.crearCancion);
api.delete('/cancion/:id', cancionController.eliminarCancion);
api.post('/cargar-fichero-cancion/:id', md_upload,cancionController.cargarFicheroCancion);
api.get('/obtener-fichero-cancion/:cancionFile', md_upload,cancionController.obtenerFicheroCancion);
//api.get('/todas-las-canciones', cancionController.obtenerCanciones);
api.get('/buscar-las-canciones/:token', cancionController.buscarCanciones);
api.get('/todas-las-canciones/:tipo/:genero', cancionController.buscarTipoGenero);



module.exports = api; 