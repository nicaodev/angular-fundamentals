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

  progressoPublicacao = 'pendente';
  porcentagemUpload: number;

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

    let acompanharUpload = interval(500).pipe(takeUntil(continua)).subscribe(() => {
      this.progressoPublicacao = 'andamento';

      this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100);

      if (this.progresso.status === 'Concluido') {
        this.progressoPublicacao = 'concluido';
        continua.next(false);
      }
    });
  }

  preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }
}
