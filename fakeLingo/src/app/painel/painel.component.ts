import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao = 'Traduza a frase';
  resposta: string;

  rodada = 0;
  rodadaFrase: Frase;

  progresso = 0; // @Input

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtbr.toUpperCase === this.resposta.toUpperCase) {
      alert('ta correta');
      // trocar pergunta da rodada
      this.rodada++;
      this.progresso += (100 / this.frases.length);

      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('ta errado');
    }
  }
}
