import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Animações do angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { LoginComponent } from './acesso/login/login.component';
import { Autenticacao } from './services/autenticacao.service';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';
import { RouterModule } from '@angular/router';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';
import { IncluirPublicacaoComponent } from './home/incluirPublicacao/incluirPublicacao.component';
import { Bd } from './services/bd.service';
import { Progresso } from './services/progresso.service';


@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [Autenticacao, AutenticacaoGuard, Bd, Progresso],
  bootstrap: [AppComponent]
})
export class AppModule { }
