import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'; //libreria de angular pero sin el decorador
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  public cancion = new Subject<any>();
  public cancionEmitida = this.cancion.asObservable();
  emitirCancion (url:any){
    this.cancion.next(url);
  }

  public canciones = new Subject<any>();
  public cancionesEmitida = this.canciones.asObservable();
  encontradasCanciones (cancionesencontradas:any){
    this.canciones.next(cancionesencontradas);
  }

  public menu = new Subject<any>();
  public menuEmitida = this.menu.asObservable();
  emitirMenu (menuElegido:any){
    this.menu.next(menuElegido);
  }

  public logue = new Subject<any>();
  public logueEmitido = this.logue.asObservable();
  emitirLogueo(usuarioLogueado:any){
    this.logue.next(usuarioLogueado);
  }
}