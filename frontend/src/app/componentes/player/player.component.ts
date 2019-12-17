import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { CompartidoService } from 'src/app/servicios/compartido.service';
import { Cancion } from 'src/app/modelos/cancion';
import { CancionService } from 
'src/app/servicios/cancion.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  url = "http://localhost:3977/api/obtener-fichero-cancion/"
  canciones: Cancion[];
  indiceCancion = 0;
  cancionActual;
  alertaCanciones;
  avisoCanciones;
  playlistInLocalStorage;

  constructor(
    private _servicioCompartido: CompartidoService,
    private _cancionService:CancionService
  ) {
    this.canciones = new Array();
    if(localStorage.getItem("playlist")!=null){
      this.canciones = JSON.parse(localStorage.getItem("playlist"));
      console.log(this.canciones)
      this.playlistInLocalStorage = true;
    }
    this._servicioCompartido.cancionEmitida.subscribe(
      cancion => {
        this.canciones.push(cancion);
        console.log(this.canciones)
        let totalCanciones = this.canciones.length;
        if (totalCanciones == 1) {
          this.iniciarReproductor();
        }
      }
    )
  }

  ngOnInit() {
    if(this.playlistInLocalStorage){
      this.iniciarReproductor();
    }
  }

  obtenerIndiceCancion() {
    return this.indiceCancion;
  }

  aumentarIndiceCancion() {
    this.indiceCancion++;
  }

  cambiarNombreCancionActual(cancionActual) {
    this.cancionActual = cancionActual;
  }

  resetIndiceCancion() {
    this.indiceCancion = 1;
  }

  iniciarReproductor() {
    var video = document.getElementById("video");
    video.setAttribute("src", this.url + this.canciones[0].archivo);
    /* video.setAttribute("height", 280); */
    this.cambiarNombreCancionActual(this.canciones[0].titulo)
    console.log(this.canciones)
    this.aumentarIndiceCancion();

    // el evento ended ocurre cuando el video termina
    video.addEventListener('ended', () => {
      //se obtiene el indice de la siguiente cancion a reproducir
      let indice = this.obtenerIndiceCancion();

      /* se valida si el indice de la siguiente cancion a reproducir
      desborda el arreglo de canciones */
      if (indice < this.canciones.length) {
        video.setAttribute("src", this.url + this.canciones[indice].archivo);
        this.cambiarNombreCancionActual(this.canciones[indice].titulo)

        //modificar el tipo del objeto/variable
        let repro = video as any;
        repro.play();
        this.aumentarIndiceCancion();
      } else {
        video.setAttribute("src", this.url + this.canciones[0].archivo)
        this.cambiarNombreCancionActual(this.canciones[0].titulo)
        this.resetIndiceCancion();
      }
    })
  }

  eliminarCancion(i){
      this.canciones.splice(i,1)
      localStorage.setItem("playlist",JSON.stringify(this.canciones));
    }
  }



