import { Pipe, PipeTransform } from '@angular/core';

/* Criando um Pipe:
  Decora a classe com @Pipe e nome do pipe;
  Implementa a interface PipeTransform;
  Importa e declara no app.module;
*/

@Pipe({ name: 'descReduzida' })

export class DescricaoReduzida implements PipeTransform {

  transform(texto: string, posicaoTruncar: number): string {
    // Recebendo parametro via declarção do Pipe e tratando aqui.

    if (texto.length > posicaoTruncar) {
      return texto.substr(0, posicaoTruncar) + '...';
    } else {
      return texto;
    }
  }
}
