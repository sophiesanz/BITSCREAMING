import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../modelos/cancion';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { CancionService } from '../../servicios/cancion.service';
import { CompartidoService } from '../../servicios/compartido.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-video',
  templateUrl: './agregar-video.component.html',
  styleUrls: ['./agregar-video.component.css']
})
export class AgregarVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('footer').style.position= "fixed";
  }

}
