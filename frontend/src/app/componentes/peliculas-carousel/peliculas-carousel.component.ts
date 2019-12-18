import { Component, OnInit, Input } from "@angular/core";
import { Cancion } from "src/app/modelos/cancion";
import { CompartidoService } from "src/app/servicios/compartido.service";
import { CancionService } from "src/app/servicios/cancion.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-carousel',
  templateUrl: './peliculas-carousel.component.html',
  styleUrls: ['./peliculas-carousel.component.css']
})
export class PeliculasCarouselComponent implements OnInit {
  images;
  title: string;
  canciones: any;
  cancionesAll: any;
  existenCanciones;

  @Input('tipo') public tipo: string;
  @Input('genero') public genero: string;

  constructor(
      private _servicioCompartido: CompartidoService,
      private _cancionService: CancionService,
      private _router : Router
  ) {
    this.existenCanciones = false;
    this._servicioCompartido.cancionesEmitida.subscribe(token => {
      this.search(token);
    });
  }

  ngOnInit() {
    this.images = this.cargarCanciones(this.tipo, this.genero);
  }

  cargarCanciones(tipo:string , genero:string) {
    this._cancionService.buscarCanciones(tipo, genero).subscribe(
      (response: any) => {
        if (response.canciones) {
          const videos = response.canciones;
          this.canciones =videos.map((video) => {
            return {
              title: video.titulo,
              video: 'http://youtube.com/watch?v=' + video.archivo,
              youtubeId: video.archivo
            };
          });
          this.existenCanciones = true;
        }
        this.cancionesAll = this.canciones;
      },
      error => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }
  
  search(token) {
    const regex = new RegExp(token);
    this.canciones = [];
    this.cancionesAll.forEach(cancion => {
      if ((cancion.title && cancion.title.match(regex)!=null) || this.genero.match(regex) != null) {
        this.canciones.push(cancion);
      }
    });
  }

  imageClick(index){
    var identifier = this.canciones[index].youtubeId;
    identifier = identifier.replace(/.+v=/,"");
    
    this._router.navigate(['/videoplay/'+identifier+'/'+this.canciones[index].title]);
  }

}
