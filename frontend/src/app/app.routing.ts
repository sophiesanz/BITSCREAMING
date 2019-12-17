import {ModuleWithProviders} from '@angular/core'; 
//modulos y funcionalidades de router
import {Routes,RouterModule} from '@angular/router';
import {ContentIndexComponent} from './componentes/content-index/content-index.component';
import {LoginComponent} from './componentes/login/login.component';
import {AgregarVideoComponent} from './componentes/agregar-video/agregar-video.component';
import {FavoritosComponent} from './componentes/favoritos/favoritos.component';
import {ContactenosComponent} from './componentes/contactenos/contactenos.component';
import {MainMenuComponent} from './componentes/main-menu/main-menu.component';
import {UserProfileComponent} from './componentes/user-profile/user-profile.component';
import {PeliculasCarouselComponent} from './componentes/peliculas-carousel/peliculas-carousel.component';
import {BuscarSeriesComponent} from './componentes/buscar-series/buscar-series.component';
import {VideoplayerComponent} from './componentes/videoplayer/videoplayer.component';


const appRoutes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: '', component:ContentIndexComponent},
    {path: 'update', component:UserProfileComponent},
    {path:'menu',component:MainMenuComponent},
    {path:'agregar-video',component:AgregarVideoComponent},
    {path:'favoritos',component:FavoritosComponent},
    {path:'contactenos',component:ContactenosComponent},
    {path:'peliculas',component:PeliculasCarouselComponent},
    {path:'videoplay/:id_youtube',component:VideoplayerComponent},
    {path:'series',component:BuscarSeriesComponent}
];
export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders =
RouterModule.forRoot(appRoutes);