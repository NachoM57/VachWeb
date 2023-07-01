import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { PaginasComponent } from './Componentes/paginas/paginas.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';


const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Servicios', component: ServiciosComponent },
  { path: 'Paginas', component: PaginasComponent },
  { path: 'Servicios', component: ServiciosComponent },
  { path: 'Contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
