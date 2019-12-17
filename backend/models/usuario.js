var mongoose = require ('mongoose');
//Schema crea el esquema del objeto que va a leer la base de datos
var Schema = mongoose.Schema;
var usuarioSchema = Schema({
    nombre:String,
    edad:Number,
    correo:String,
    password:String,
    imagen:String,
    sexo:String,
    role:String
});
module.exports = mongoose.model('usuario', usuarioSchema);