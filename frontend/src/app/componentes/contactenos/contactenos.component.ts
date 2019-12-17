import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../modelos/cancion';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { CancionService } from '../../servicios/cancion.service';
import { CompartidoService } from '../../servicios/compartido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
