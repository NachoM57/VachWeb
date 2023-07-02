import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { PaginasComponent } from './Componentes/paginas/paginas.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { LandingPageComponent } from './Componentes/landing-page/landing-page.component';


const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Servicios', component: ServiciosComponent },
  { path: 'Paginas', component: PaginasComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: 'Landing', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
