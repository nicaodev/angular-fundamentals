import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {
  constructor(private progresso: Progresso) { }

  public publicar(publicacao: any): void {

    let nomeImagem = Date.now();

    //upload
    firebase.storage().ref()
      .child(`imagens/${nomeImagem}`)
      .put(publicacao.imagem)
      // progresso de upload
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => {
          this.progresso.status = 'Em andamento';
          this.progresso.estado = snapshot;
          // console.log(snapshot);
        },
        (error) => {
          this.progresso.status = 'Deu ruim';
          // console.log(error);
        },
        () => {
          // Callback de escuta de finalização do processo
          this.progresso.status = 'Concluido';
          // console.log('UPLOAD FEITO!!');
        }
      )
    // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
    // .push({
    //   titulo: publicacao.titulo
    // });


    console.log('servico responsabel dados', publicacao);
  }
}
