import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bd } from 'src/app/services/bd.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-incluirPublicacao',
  templateUrl: './incluirPublicacao.component.html',
  styleUrls: ['./incluirPublicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  constructor(private bd: Bd) { }

  email: string;
  formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  });

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    });
  }

  publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo
    });
  }

}
