'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3977;
mongoose.connect(
    'mongodb://bit:G2PQoRHblGi0yeNK@ds121135.mlab.com:21135/bitnetflix', // aqui se coloca el nombre de la base de datos
    (error, answer) => {
        if (error){
            console.log('No se pudo conectar a db')
        } else {
            console.log('La conexion a db es posible')
            app.listen(port, ()=> {
                console.log('API escuchando en el puerto '+ port);
            })
        }
    }
)