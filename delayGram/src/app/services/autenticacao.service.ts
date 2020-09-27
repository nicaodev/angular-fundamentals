import { Usuario } from '../models/usuario.model';

import * as firebase from 'firebase';

export class Autenticacao {

  public cadastrarUsuario(user: Usuario): void {

    console.log('chegamos no servico', user);

    firebase.auth().createUserWithEmailAndPassword(user.email, user.senha)
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
}
