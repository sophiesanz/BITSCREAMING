const mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var cancionSchema = Schema({
    titulo:String,
    duracion:String,
    genero:String,
    tipo:String,
    archivo:String
},{collection:'Canciones'});

module.exports = mongoose.model('Canciones', cancionSchema);