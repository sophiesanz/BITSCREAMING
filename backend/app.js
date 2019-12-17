'use strict' //ecmascript
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();  // funcion top-level del modulo express 
var cancionRoutes = 
require ('./routes/cancion');
var usuarioRoutes =
require ('./routes/usuario');
app.use(bodyParser.urlencoded( //Permite cargar imagenes y videos 
    {extended:false}));
app.use(bodyParser.json()); //Formato en que se va a enviar la informacion
//configurar cabeceras http,
// son los headers que vamos a devolver
// cuando nos hagan una solicitud
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
        //permitir acceso a nuestra api desde todos los dominios
        
    res.header('Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method');
        //cabeceras necesarias para que el api 
        //a nivel de ajax funcione
        res.header('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE');
        //metodos mas comunes
        res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
        next();//finaliza middleware
    })
app.use('/api',cancionRoutes);
app.use('/api',usuarioRoutes);
module.exports = app;