'use strict'

var fs = require('fs');
var path = require('path');

const Cancion = require('../models/Cancion')

function crearCancion(req, res) {
    var cancion = new Cancion();
    var params = req.body;

    cancion.titulo = params.titulo;
    cancion.duracion = params.duracion;
    cancion.genero = params.genero;
    cancion.tipo = params.tipo;
    cancion.archivo = params.archivo;


    cancion.save()
        .then((cancionCreada) => {
            if (!cancionCreada) {
                res.status(404).send({
                    message: 'No se ha creado el video'});
            } else {
                res.status(200).send({
                    cancion: cancionCreada});
            }
        }).catch(error => {
            res.status(500).send({
                message: 'Error al crear el video'});
        })
}

function eliminarCancion(req, res) {
    var idCancion = req.params.id;

    Cancion.findByIdAndRemove(idCancion).exec()
        .then((cancionEliminada) => {
            if (!cancionEliminada) {
                res.status(404).send({
                    message: 'No se ha eliminado el video'});
            } else {
                res.status(200).send({
                    cancion:cancionEliminada, message: "El video fue eliminado"});
            }
        }).catch(error => {
            res.status(500).send({
                message: 'Error al eliminar el video'});
        })

}

function obtenerFicheroCancion(req, res) {
    //nombre fichero
    var songFile = req.params.cancionFile;
    //ruta archivo
    var path_file = './uploads/canciones/' + songFile;
    //se comprueba si existe
    fs.exists(path_file, function (exists) {
        if (exists) {
            //devolvemos imagen
            res.sendFile(path.resolve(path_file));
        } else {
            res.status(200).send({
                message: 'El video que busca no existe'});
        }
    });

}

function cargarFicheroCancion(req, res) {
    var idCancion = req.params.id;
    var file_name = 'No subido...';

    //se valida si viene el archivo con la variable superglobal files
    if (req.files) {
        var file_path = req.files.file.path;
        var file_split = file_path.split('\/');
        //se obtiene nombre del archivo
        var file_name = file_split[2];

        //se obtiene extension fichero
        var exp_split = file_name.split('\.');
        var file_ext = exp_split[1];

        if (file_ext == 'mp4') {
            Cancion.findByIdAndUpdate(idCancion, {archivo: file_name}, (err, cancionActualizada) => {

                if (err) {
                    res.status(500).send({
                        message: 'Error en el servidor'});
                } else {
                    if (!cancionActualizada) {
                        res.status(404).send({message: 'No se ha podido cargar el video'});
                    } else {
                        //devuelve usuario antes de actualizarse
                        cancionActualizada.archivo = file_name;
                        res.status(200).send({cancion: cancionActualizada});
                    }
                }
            });
        } else {
            res.status(200).send({
                message: "Extension del archivo no es correcta"});
        }
    } else {
        res.status(200).send({message: "no ha subido ninguna cancion"});
    }

}

function obtenerCanciones(req, res) {

    Cancion.find((err, canciones) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor al obtener videos'})
        } else {
            if (!canciones) {
                res.status(200).send([{
                    message: 'No se puede obtener videos'}])
            } else {
                res.status(200).send({
                    canciones: canciones})
            }
        }
    });
}


function buscarTipoGenero(req, res) {
  const generoPar = req.params.genero;
  const tipoPar = req.params.tipo;
  const object = {};
  object[param] = value;

  Cancion.find({
    tipo:tipoPar,
    genero:generoPar
  }, (err, canciones) => {
      if (err) {
          res.status(500).send({
              message: 'error en el servidor'
          })
      } else {
          if (!canciones) {
              res.status(200).send({
                  message: 'no se puede obtener canciones'
              })
          } else {
              res.status(200).send({
                  canciones: canciones
              })
          }
      }
  });

}



function buscarCanciones(req, res) {
    var token = req.params.token;

    Cancion.find({
        "titulo": {
            $regex: new RegExp(token),
            $options: 'i'
        },
        "genero": {
            $regex: new RegExp(token),
            $options: 'i'
        },
        "tipo": {
            $regex: new RegExp(token),
            $options: 'i'
        }
    }, (err, canciones) => {
        if (err) {
            res.status(500).send({
                message: 'error en el servidor'
            })
        } else {
            if (!canciones) {
                res.status(200).send({
                    message: 'no se puede obtener canciones'
                })
            } else {
                res.status(200).send({
                    canciones: canciones
                })
            }
        }
    });

}


module.exports = {
    crearCancion,
    eliminarCancion,
    obtenerFicheroCancion,
    cargarFicheroCancion,
    obtenerCanciones,
    buscarCanciones,
    buscarTipoGenero
}