import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  frases: Frase[] = FRASES;
  instrucao = 'Traduza a frase';
  resposta = '';

  rodada = 0;
  rodadaFrase: Frase;

  progresso = 0; // @Input

  tentativas = 3;

  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta(): void {

    if (this.rodadaFrase.frasePtbr.toUpperCase() === this.resposta.toUpperCase()) {

      // trocar pergunta da rodada
      this.rodada++;
      this.progresso += (100 / this.frases.length);

      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitoria');
      }

      this.atualizaRodada();
    } else {

      this.resposta = '';
      this.tentativas--;

      if (this.tentativas === -1) {

        this.encerrarJogo.emit('Derrota');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';

  }
}
