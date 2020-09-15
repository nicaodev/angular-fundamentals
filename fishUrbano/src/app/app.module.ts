import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';

// Modo para requisições HTTTP. Neste projeto usa-se o json-server uma fake api que permite requisições.
import { HttpModule } from '@angular/http';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

@NgModule({
  declarations: [	
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
      OfertaComponent,
      ComoUsarComponent,
      OndeFicaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
