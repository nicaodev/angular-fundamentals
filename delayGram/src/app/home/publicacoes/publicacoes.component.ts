import { Component, OnInit } from '@angular/core';
import { Bd } from 'src/app/services/bd.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  constructor(private bd: Bd) { }
  email: string;
  publicacoes: any;

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;

      this.atualizarTimeLine();
    });
  }

  public atualizarTimeLine(): void {
    this.bd.consultaPublicacoes(this.email).then((retorno: any) => {
      this.publicacoes = retorno;
    })
  }

}
