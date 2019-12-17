  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  // cliente http hacer peticiones al backend
  import { map } from 'rxjs/operators';
  //se importa map, libreria para mapear objetos
  import { Observable } from 'rxjs'
  //recojer respuestas de cuando hacemos una peticion ajax al servidor
  @Injectable({
    providedIn: 'root'
  })
  export class CancionService {
    url = "http://localhost:3977/api/";
    constructor(
      private _http: HttpClient
    ) { }
    crearCancion(cancion) {
      let params = JSON.stringify(cancion);
      let options = {
        headers: new HttpHeaders(
          { 'Content-Type': 'application/json' })};
      return this._http.post(
        this.url + "cancion",
        params,
        options
      ).pipe(map(res => res));
    }
    /* cargarCancion(file: File, id) {
      var formData = new FormData();
      formData.append('song', file);
      return this._http.post(
        this.url + "cargar-cancion/" + id,
        formData
      ).pipe(map(res => res));
    } */
    eliminarCancion(id) {
      let options = {
        headers: new HttpHeaders(
          {'Content-Type': 'application/json'
          })
      };
      return this._http.delete(
        this.url + 'cancion/' + id,
        options
      ).pipe(map(res => res));
    }

    obtenerCanciones() {
    let options = {
    headers: new HttpHeaders(
    {'Content-Type': 'application/json'
    })
    };
    return this._http.get(
    this.url+'todas-las-canciones',
    options
    ).pipe(map(res => res));
  }

  buscarCanciones(tipo, genero) {
    let options = {
    headers: new HttpHeaders(
    {'Content-Type': 'application/json'
    })
    };
    return this._http.get(
    this.url+'todas-las-canciones/'+tipo+'/'+genero,
    options
    ).pipe(map(res => res));
  }
  buscarCancionesToken(token) {
    let options = {
    headers: new HttpHeaders(
    {'Content-Type': 'application/json'
    })
    };
    return this._http.get(
    this.url+'buscar-las-canciones/'+token,
    options
    ).pipe(map(res => res));
  }

  cargarFicheroCancion(file:File,id){
    var formData = new FormData();
    formData.append('file', file);
    return this._http.post(
      this.url + "cargar-fichero-cancion/" + id,
      formData
    ).pipe(map(res => res)); 
  }

  }