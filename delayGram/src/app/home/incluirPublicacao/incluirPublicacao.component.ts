import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bd } from 'src/app/services/bd.service';

import * as firebase from 'firebase';
import { Progresso } from 'src/app/services/progresso.service';
import { takeUntil } from 'rxjs/operators';

import { interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-incluirPublicacao',
  templateUrl: './incluirPublicacao.component.html',
  styleUrls: ['./incluirPublicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  constructor(private bd: Bd, private progresso: Progresso) { }

  email: string;
  imagem: any;
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
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    });

    let continua = new Subject();
    continua.next(true);

    let acompanharUpload = interval(1500).pipe(takeUntil(continua)).subscribe(() => {
      console.log('statussss', this.progresso.status);
      console.log('estadooooo', this.progresso.estado);
      if (this.progresso.status === 'Concluido') {
        continua.next(false);
      }
    });


  }

  preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }

}
