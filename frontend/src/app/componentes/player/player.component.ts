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
        let totalCanciones = this.canciones.length;
      }
    )
  }

  ngOnInit() {
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

  eliminarCancion(i){
      this.canciones.splice(i,1)
      localStorage.setItem("playlist",JSON.stringify(this.canciones));
    }
  }



