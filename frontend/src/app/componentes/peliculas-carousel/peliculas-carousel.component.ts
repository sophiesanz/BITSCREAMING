import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-carousel',
  templateUrl: './peliculas-carousel.component.html',
  styleUrls: ['./peliculas-carousel.component.css']
})
export class PeliculasCarouselComponent implements OnInit {
  images;

  constructor() { }

  ngOnInit() {
    this.images = [
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

}
