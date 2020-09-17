import { Pipe, PipeTransform } from '@angular/core';

/* Criando um Pipe:
  Decora a classe com @Pipe e nome do pipe;
  Implementa a interface PipeTransform;
  Importa e declara no app.module;
*/

@Pipe({ name: 'descReduzida' })

export class DescricaoReduzida implements PipeTransform {

  transform(texto: string): string {
    if (texto.length > 15) {
      return texto.substr(0, 15) + '...';
    } else {
      return texto;
    }
  }
}
