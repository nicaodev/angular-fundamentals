import { Usuario } from "../models/usuario.model";

export class Autenticacao {

  public cadastrarUsuario(user: Usuario): void {

    console.log('chegamos no servico', user);
  }
}
