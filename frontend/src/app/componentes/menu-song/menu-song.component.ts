import { Component, OnInit, NgModule } from "@angular/core";
import { Cancion } from "src/app/modelos/cancion";
import { CancionService } from "src/app/servicios/cancion.service";
import { Usuario } from "src/app/modelos/usuario";
import { CompartidoService } from "src/app/servicios/compartido.service";

@Component({
  selector: "app-menu-song",
  templateUrl: "./menu-song.component.html",
  styleUrls: ["./menu-song.component.css"]
})
export class MenuSongComponent implements OnInit {
  canciones: Cancion[];
  cancionesAll: Cancion[];
  existenCanciones;
  images;
  imagesAll;
  alertaCanciones;
  avisoCanciones;
  usuario: Usuario;

  constructor(
      private _cancionService: CancionService
  ) {
    this.existenCanciones = false;
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
  }

  ngOnInit() {
  }

  cargarCanciones() {
    this._cancionService.obtenerCanciones().subscribe(
      (response: any) => {
        if (response.canciones) {
          this.canciones = response.canciones;
          this.existenCanciones = true;
        } else {
          this.alertaCanciones = `No fue posible cargar
          las peliculas/series, contacte al administrador`;
        }
      },
      error => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

  agregarListaReproduccion(cancion) {
    this.avisoCanciones =
      cancion.titulo + " fue agregada a su lista de favoritos";
    var playlist = [];
    if (localStorage.getItem("playlist") != null) {
      playlist = JSON.parse(localStorage.getItem("playlist"));
      playlist.push(cancion);
    } else {
      playlist.push(cancion);
    }
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }

  eliminarCancion(cancion) {
    this._cancionService.eliminarCancion(cancion._id).subscribe(
      (response: any) => {
        if (response.cancion) {
          this.avisoCanciones = cancion.titulo + " fue eliminada";
          this.cargarCanciones();
        } else {
          this.avisoCanciones =
            "La pelicula no pudo ser eliminada, revise el codigo";
        }
      },
      error => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }
}
