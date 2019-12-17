import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; //validacion formulario
import {HttpClientModule} from '@angular/common/http'; //peticiones HTTP
import {routing, appRoutingProviders}// Se importa todo lo definido en el archivo de routing
from './app.routing';
import { AppComponent } from './app.component';
import { ContentIndexComponent } from './componentes/content-index/content-index.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import { MenuSongComponent } from './componentes/menu-song/menu-song.component';
import { PlayerComponent } from './componentes/player/player.component';
import { SongToolsComponent } from './componentes/song-tools/song-tools.component';
import { UserProfileComponent } from './componentes/user-profile/user-profile.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MatMenuModule, MatButtonModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarVideoComponent } from './componentes/agregar-video/agregar-video.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { NgImageSliderModule } from "ng-image-slider";
import { BuscarPeliculasComponent } from './componentes/buscar-peliculas/buscar-peliculas.component';
import { BuscarSeriesComponent } from './componentes/buscar-series/buscar-series.component';
import { VideoplayerComponent } from './componentes/videoplayer/videoplayer.component';
import { PeliculasCarouselComponent } from './componentes/peliculas-carousel/peliculas-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentIndexComponent,
    FooterComponent,
    LoginComponent,
    MainMenuComponent,
    MenuSongComponent,
    PlayerComponent,
    SongToolsComponent,
    UserProfileComponent,
    FilterPipe,
    AgregarVideoComponent,
    FavoritosComponent,
    ContactenosComponent,
    BuscarPeliculasComponent,
    BuscarSeriesComponent,
    VideoplayerComponent,
    PeliculasCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule,
    NgImageSliderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
