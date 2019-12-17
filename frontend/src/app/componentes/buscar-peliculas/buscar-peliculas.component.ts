import { Component, OnInit, NgModule } from "@angular/core";
import { Cancion } from "src/app/modelos/cancion";
import { CancionService } from "src/app/servicios/cancion.service";
import { Usuario } from "src/app/modelos/usuario";
import { CompartidoService } from "src/app/servicios/compartido.service";

@Component({
  selector: 'app-buscar-peliculas',
  templateUrl: './buscar-peliculas.component.html',
  styleUrls: ['./buscar-peliculas.component.css']
})
export class BuscarPeliculasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
