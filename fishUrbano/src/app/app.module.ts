import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Modo para requisições HTTTP. Neste projeto usa-se o json-server uma fake api que permite requisições.
import { HttpModule } from '@angular/http';

import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { OrdemCompraComponent } from './ordemCompra/ordemCompra.component';
import { OrdemCompraSucessoComponent } from './ordemCompraSucesso/ordemCompraSucesso.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// PIPES
import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

//Services
import { CarrinhoService } from './services/carrinho.service';


registerLocaleData(localePt);
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
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [CarrinhoService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
