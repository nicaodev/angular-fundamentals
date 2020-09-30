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
        },
        (error) => {
          this.progresso.status = 'Deu ruim';
        },
        () => {
          // Callback de escuta de finalização do processo + save imagem.
          this.progresso.status = 'Concluido';

          firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push
            ({ titulo: publicacao.titulo, url_imagem: nomeImagem });
        }
      );
  }
  consultaPublicacoes(emailUser: string): any {
    firebase.database().ref(`publicacoes/${btoa(emailUser)}`).once('value').then((snapshot: any) => {
      console.log('recuprando infor', snapshot.val());
    })
  }

}
