import { Component, OnInit, NgModule } from "@angular/core";
import { Cancion } from "src/app/modelos/cancion";
import { CancionService } from "src/app/servicios/cancion.service";
import { Usuario } from "src/app/modelos/usuario";
import { CompartidoService } from "src/app/servicios/compartido.service";

@Component({
  selector: 'app-buscar-series',
  templateUrl: './buscar-series.component.html',
  styleUrls: ['./buscar-series.component.css']
})
export class BuscarSeriesComponent implements OnInit {
  canciones: Cancion[];
  existenCanciones;
  images;
  alertaCanciones;
  avisoCanciones;
  usuario: Usuario;

  constructor(
    private _cancionService: CancionService,
    private _servicioCompartido: CompartidoService
  ) { 
    this.existenCanciones = false;
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
    this._servicioCompartido.cancionesEmitida.subscribe(canciones => {
      this.canciones = canciones;
    });
  }

  ngOnInit() {
    this.cargarCanciones();
    this.images =[
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title1',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title2',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title3',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
      {
        video: "https://youtu.be/6pxRHBw-k8M",
        title: 'Image title',
      },
    ]
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
    this._servicioCompartido.emitirCancion(cancion);
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

  search(token) {
    if (token != "" && token.length > 2) {
      this._cancionService.buscarCanciones(token).subscribe(
        (response: any) => {
          this.canciones = response.canciones;
          this.existenCanciones = true;
        },
        error => {
          if (error != null) {
            console.log(error);
          }
        }
      );
    } else {
      this.cargarCanciones();
    }
  }

}
