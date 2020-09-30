import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {
  constructor(private progresso: Progresso) { }

  public publicar(publicacao: any): void {

    // let nomeImagem = Date.now();
    firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`).push
      ({ titulo: publicacao.titulo }).then((resposta: any) => {
        let nomeImagem = resposta.key;

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
            }
          );
      });

  }
  consultaPublicacoes(emailUser: string): any {
    // Consultando as publicacoes(database)
    firebase.database().ref(`publicacoes/${btoa(emailUser)}`).once('value').then((snapshot: any) => {
      console.log('recuprando infor', snapshot.val());

      let publicacoes: Array<any> = [];

      snapshot.forEach((childSnapshot: any) => {
        // consultar url-tokenizada da imagem(storage)
        let publicacao = childSnapshot.val();

        firebase.storage().ref().child(`imagens/${childSnapshot.key}`)
          .getDownloadURL()
          .then((url: string) => {
            publicacao.url_imagem = url;

            publicacoes.push(publicacao);
          });
      });

      console.log('rlaao', publicacoes);
    });
  }

}
