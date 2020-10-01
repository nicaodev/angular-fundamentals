import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') publicacoes: any;


  constructor(private auth: Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void {
    this.auth.sair();
  }

  atualizarTimeLine(): void {
    this.publicacoes.atualizarTimeLine();
  }
}
