import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { CompartidoService } from 'src/app/servicios/compartido.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  ubicacion: string;
  usuario: Usuario;
  appMenu; //????

  constructor(private _usuarioService: UsuarioService,
    private _compartidoService: CompartidoService
  ) {

    this._compartidoService.menuEmitida.subscribe(ubicacion => {
      this.ubicacion = ubicacion;  //???
    })

    this.ubicacion = "buscar";
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
  }

  asignarUbicacion(ubicacion){
    this.ubicacion = ubicacion;
  }
}

