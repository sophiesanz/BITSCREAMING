import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  publicidades: string[];
  player;
  done: Boolean;
  haztePremium: Boolean;
  publicidad: Boolean;
  usuario: Usuario;
  youtubeId: string;
  start: number;
  constructor(
    private _router: Router,// inicializamos el servicio de router{
    private aroute: ActivatedRoute// inicializamos el servicio de router{
  ) {
    this.publicidades = ['MrxGdtYzUkk', 'fFFf91-K30U', 'iPjaMOZZD58', 'A2AcUQHrJIE', 'roIok_ya084', 'gGO4t7oCHNA']
    this.done = false
    this.start = 0;
    this.haztePremium = false;
  }

  ngOnInit() {

    if (localStorage.getItem("sesion") == null) {
      this._router.navigate(['/']);
    }
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
    console.log("iniciado");


    this.done = false;
    this.publicidad = false;
    // 2. This code loads the IFrame Player API code asynchronously.
    if (!document.getElementById("ytscript")) {
      var tag = document.createElement('script');
      tag.setAttribute("Id", "ytscript");

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      window['onYouTubeIframeAPIReady'] = () => this.onYouTubeIframeAPIReady();
    }
    else { location.reload() }

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.obtenerTiempo();
    }, 3000);
    this.youtubeId = this.aroute.snapshot.paramMap.get('id_youtube');

  }
  onYouTubeIframeAPIReady() {
    this.player = new window['YT'].Player('player', {
      height: '100%',
      width: '100%',
      videoId: this.youtubeId,
      //playerVars: { startSeconds: 605 },
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }
  obtenerTiempo() {
    if (this.usuario.role == 'free') {
      const current = this.player.getCurrentTime();
      this.haztePremium = current > 600
      if (!this.publicidad) {
        if (!this.haztePremium && current - this.start > 60) {
          this.reproducirPublicidad()
          this.start = current;
          this.publicidad = true;
        }
      } else {
        if (this.player.getPlayerState() == 0) {
          this.player.loadVideoById(this.youtubeId, this.start, 'Large')
          this.publicidad = false;
        }
      }

      setTimeout(() => {    //<<<---    using ()=> syntax
        this.obtenerTiempo();
      }, 200);
    }
  }
  // 4. The API will call this function when the video player is ready.
  onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  onPlayerStateChange(event) {
  }

  stopVideo() {
  }

  reproducirPublicidad() {
    var index = Math.floor(Math.random() * this.publicidades.length);
    this.player.loadVideoById(this.publicidades[index], 0, 'small')
  }

}
