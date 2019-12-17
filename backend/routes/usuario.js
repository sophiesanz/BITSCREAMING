
'use strict'
var app = require ('express');
var UsuarioController = require('../controllers/usuario')
var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir:'./uploads/usuario'})

var api = app.Router();
api.get('/prueba_usuario', UsuarioController.prueba_usuario);
api.post('/usuario', UsuarioController.crearUsuario);
api.post('/usuario-login/', UsuarioController.obtenerUsuario);
api.put('/usuario/:id', UsuarioController.actualizarUsuario);
api.delete('/usuario/:id', UsuarioController.eliminarUsuario);
api.post('/cargar-imagen-usuario/:id', md_upload,UsuarioController.cargarImagenUsuario);
api.get('/obtener-imagen-usuario/:imageFile', md_upload,UsuarioController.obtenerImagenUsuario);
api.post('/actulizar-tiempo/:id', md_upload,UsuarioController.actualizarTiempo);

module.exports = api; 