'use strict'
//añadir librerias para trabajar con ficheros nativas de node js


var fs = require('fs');
var path = require('path');
//importar el modelo
var Usuario = require('../models/usuario')

function prueba_usuario(req,res){
    res.status(200).send({
        message : "controlador usuario"
        +" esta funcionando"
    })
}

function crearUsuario(req,res){
    var usuario = new Usuario();
    var params = req.body;

    usuario.nombre = params.nombre;
    usuario.edad = params.edad;
    usuario.correo = params.correo;
    usuario.password = params.password;
    usuario.imagen = params.imagen;
    usuario.sexo =params.sexo;
    usuario.role = "ROLE_ADMI";

    usuario.save()
    .then((usuarioGuardado)=>{
        if(!usuarioGuardado){
            res.status(404).send({message:'No se ha registrado el usuario'});
        }else{
            res.status(200).send({usuario:usuarioGuardado});
        }
    }).catch(error =>{
        res.status(500).send({message:'Error al guardar el usuario'});
    })
}

function actualizarUsuario(req,res){
    var idUsuario = req.params.id;
    var nuevosDatos = req.body;
    
    Usuario.findByIdAndUpdate(idUsuario,nuevosDatos).exec()
    .then((usuarioActualizado)=>{
        if (!usuarioActualizado) {
            res.status(404).send({ message: "El usuario no ha sido actualizado" });
        } else {
            res.status(200).send({ usuario: usuarioActualizado });
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error al actualizar el usuario" });
    })
}

function eliminarUsuario(req,res){
    var idUsuario = req.params.id;
    
    Usuario.findByIdAndRemove(idUsuario).exec()
    .then((usuarioEliminado)=>{
        if (!usuarioEliminado) {
            res.status(404).send({ message: "El usuario no ha sido eliminado" });
        } else {
            res.status(200).send({ usuario:usuarioEliminado, message: "El usuario ha sido eliminado"  });
           
        }
    }).catch(error =>{
        res.status(500).send({ message: "Error al eliminar el usuario" });
    })
    
}

function obtenerUsuario(req,res){
    var params = req.body;
    var correo = params.correo;
    var password = params.password;
    Usuario.findOne({correo:correo.toLowerCase()},
        (err,usuario)=>{
            if(err){
                res.status(500).send({
                    message:'Error en el servidor'})
            }else{
                if(!usuario){
                    res.status(200).send({
                        message:`No existe usuario con el correo: ${correo}`})
                }else{
                    if(usuario.password !=password){
                        res.status(200).send({
                            message:'contraseña errada'})
                    }else{
                        res.status(200).send({
                            usuario:usuario})
                    }
                }
            }
        }
    )


}


function obtenerImagenUsuario(req,res){
    //nombre fichero
    var imageFile = req.params.imageFile;
    //ruta archivo
    var path_file = './uploads/usuario/'+ imageFile;
    //se comprueba si existe
    fs.exists(path_file,function(exists){
        if(exists){
            //devolvemos imagen
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message:'no existe imagen'});
        }
    }); 

}



function cargarImagenUsuario(req,res){
    var idUsuario = req.params.id;
    var file_name = 'No subido...';

    //se valida si viene el archivo con la variable superglobal files
    if(req.files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\/');
        //se obtiene nombre del archivo
        var file_name = file_split[2];

        //se obtiene extension fichero
        var exp_split = file_name.split('\.');
        var file_ext = exp_split[1];

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){
            Usuario.findByIdAndUpdate(idUsuario,{imagen:file_name},(err,usuarioActualizado)=>{
                if(err){
                    res.status(500).send({message:'Error en el servidor'});
                }else{
                    if(!usuarioActualizado){
                        res.status(404).send({message:'No se ha podido actualizar imagen del usuario'});
                    }else{
                        //devuelve usuario antes de actualizarse
                        usuarioActualizado.imagen = file_name;
                        res.status(200).send({usuario:usuarioActualizado});
                    }
                }
            });
        }else{
            res.status(200).send({message:"Extension del archivo no correcta"});    
        }
    }else{
        res.status(200).send({message:"No ha subido ninguna imagen"});
    }
}








module.exports = {
    prueba_usuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    obtenerUsuario,
    obtenerImagenUsuario,
    cargarImagenUsuario

    
}
 

