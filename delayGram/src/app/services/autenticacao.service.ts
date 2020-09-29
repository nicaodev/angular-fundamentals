import { Usuario } from '../models/usuario.model';

import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable() // Injetar um serviço em outro serviço.
export class Autenticacao {

  tokenId: string;

  constructor(private router: Router) { }

  public cadastrarUsuario(user: Usuario): Promise<any> {

    return firebase.auth().createUserWithEmailAndPassword(user.email, user.senha)
      .then((retorno: any) => {
        // Removendo senha do obj a ser persistido.
        delete user.senha;
        // Registrando dados complementares do user no path(nó) com email na base 64(btoa).
        firebase.database().ref(`usuario_detalhe/${btoa(user.email)}`)
          .set(user);

      }).catch((error: Error) => {
        console.log('Erro', error);
      });
  }

  public autenticar(email: string, senha: string): void {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((retorno: any) => {
        firebase.auth().currentUser.getIdToken()
          .then((idToken: string) => {
            this.tokenId = idToken;
            localStorage.setItem('idToken', idToken);
            this.router.navigate(['/home']);
          });
      })
      .catch((err: Error) => console.log('Erro: ', err));
  }

  public autenticado(): boolean {

    if (this.tokenId === undefined && localStorage.getItem('idToken') != null) {
      this.tokenId = localStorage.getItem('idToken');
    }

    if (this.tokenId === undefined) {
      this.router.navigate(['/']);
    }
    return this.tokenId !== undefined;
  }
  public sair(): void {

    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.tokenId = undefined;
        this.router.navigate(['/']);
      })
  }
}
