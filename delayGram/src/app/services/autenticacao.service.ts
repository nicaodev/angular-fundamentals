import { Usuario } from '../models/usuario.model';

import * as firebase from 'firebase';

export class Autenticacao {

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
      .then((retorno: any) => console.log(retorno))
      .catch((err: Error) => console.log('Erro: ', err));
  }
}
