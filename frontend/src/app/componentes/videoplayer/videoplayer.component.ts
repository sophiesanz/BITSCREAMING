import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent implements OnInit {
  player;
  done:Boolean;
  publicidad:Boolean;
  constructor(
    private _router: Router,// inicializamos el servicio de router{
      private aroute: ActivatedRoute// inicializamos el servicio de router{
      ) 
    { 
  }

  ngOnInit() {
    this.done = false;
    this.publicidad = false;
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    window['onYouTubeIframeAPIReady'] = () =>this.onYouTubeIframeAPIReady();

    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.obtenerTiempo();
 }, 3000);
    
  }
  onYouTubeIframeAPIReady(){
    this.player = new window['YT'].Player('player', {
      height: '100%',
      width: '100%',
      videoId: this.aroute.snapshot.paramMap.get('id_youtube'),
      playerVars:{startSeconds: 605},
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }
  obtenerTiempo(){
    this.publicidad = this.player.getCurrentTime() > 60;
    
    if (!this.publicidad) {
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.obtenerTiempo();
   }, 1000);
      
    }else{
      this.stopVideo();
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
    if (event.data == window['YT'].PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }
  stopVideo() {
  }

}
