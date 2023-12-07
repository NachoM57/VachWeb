import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { PaginasComponent } from './Componentes/paginas/paginas.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { RegaloComponent } from './Componentes/regalo/regalo.component';
import { DudasComponent } from './Componentes/dudas/dudas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BannerComponent,
    ServiciosComponent,
    PaginasComponent,
    ContactoComponent,
    NosotrosComponent,
    RegaloComponent,
    DudasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
