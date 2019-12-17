import { Component, OnInit, Input } from "@angular/core";
import { Cancion } from "src/app/modelos/cancion";
import { CancionService } from "src/app/servicios/cancion.service";

@Component({
  selector: 'app-peliculas-carousel',
  templateUrl: './peliculas-carousel.component.html',
  styleUrls: ['./peliculas-carousel.component.css']
})
export class PeliculasCarouselComponent implements OnInit {
  images;
  title: string;
  canciones: Cancion[];
  existenCanciones;

  @Input('tipo') public tipo: string;
  @Input('genero') public genero: string;

  constructor(
    private _cancionService: CancionService,
  ) {
    this.existenCanciones = false;
  }

  ngOnInit() {
    this.images = this.cargarCanciones(this.tipo, this.genero);
  }

  cargarCanciones(tipo:string , genero:string) {
    this._cancionService.buscarCanciones(tipo, genero).subscribe(
      (response: any) => {
        if (response.canciones) {
          this.canciones = response.canciones;
          console.log('response.canciones', response.canciones);
          this.existenCanciones = true;
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
