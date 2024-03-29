import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from '../../src/cache.interceptor';

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
import { BeneficiosComponent } from './Componentes/beneficios/beneficios.component';
import { NuestrasAppComponent } from './Componentes/nuestras-app/nuestras-app.component';
import { TiposComponent } from './Componentes/tipos/tipos.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';


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
    BeneficiosComponent,
    NuestrasAppComponent,
    TiposComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
