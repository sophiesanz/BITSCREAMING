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
// import {BuscarPeliculasComponent} from './componentes/buscar-peliculas/buscar-peliculas.component';
import {BuscarSeriesComponent} from './componentes/buscar-series/buscar-series.component';


const appRoutes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: '', component:ContentIndexComponent},
    {path: 'update', component:UserProfileComponent},
    {path:'menu',component:MainMenuComponent},
    {path:'agregar-video',component:AgregarVideoComponent},
    {path:'favoritos',component:FavoritosComponent},
    {path:'contactenos',component:ContactenosComponent},
    // {path:'peliculas',component:BuscarPeliculasComponent},
    {path:'series',component:BuscarSeriesComponent}
];
export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders =
RouterModule.forRoot(appRoutes);