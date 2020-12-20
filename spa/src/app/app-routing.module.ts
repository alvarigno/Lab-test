import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent }  from './components/Services/services.component';
import { ServiceComponent } from './components/service/service.component';


const ROUTES: Routes = [
 {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  {path:'services/:termino', component: ServicesComponent},
  {path:'service/:id', component: ServiceComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];




/* para activar el # ,{useHash: true} */
export const APP_ROUTING =  RouterModule.forRoot(ROUTES);
