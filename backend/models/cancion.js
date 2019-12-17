const mongoose = require('mongoose');
//Schema
var Schema = mongoose.Schema;

var cancionSchema = Schema({
    titulo:String,
    duracion:String,
    genero:String,
    tipo:String,
    archivo:String
});

module.exports = mongoose.model('Cancion', cancionSchema);