import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void {
    this.auth.sair();
  }
}
