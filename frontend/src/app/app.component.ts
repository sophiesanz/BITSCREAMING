import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompartidoService } from './servicios/compartido.service';
import { Usuario } from 'src/app/modelos/usuario';
import { Cancion } from 'src/app/modelos/cancion';
import { CancionService } from
  'src/app/servicios/cancion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'Bit music'; */
  alertaCanciones;
  existenCanciones;
  canciones: Cancion[];
  usuarioLogueado = false;
  usuario: Usuario;
  
  constructor(
    private _compartidoService: CompartidoService,// inicializamos el servicio compartido
    private _router: Router,// inicializamos el servicio de router
    private _cancionService: CancionService
    
    
  ) {

   
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
    if (this.usuario != null) {
      this.usuarioLogueado = true;
    }
    this._compartidoService.logueEmitido.subscribe(
      usuarioLogueado => {
        this.usuarioLogueado = usuarioLogueado;
        this.usuario = JSON.parse(localStorage.getItem("sesion"));
      }
    )
  }

  cerrarSesion() {
    this.usuario = null;
    this.usuarioLogueado = false;
    localStorage.removeItem("sesion");
    localStorage.removeItem("playlist");
    this._router.navigate(['/login'])
  }

  
  asignarUbicacion(ubicacion){
    this._router.navigate(['/menu'])
    this._compartidoService.emitirMenu(ubicacion);
  }

  search(token) {
    this._compartidoService.encontradasCanciones(token);
  }
}




