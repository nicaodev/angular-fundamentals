import { Component, OnInit } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  s2Vazio = '/assets/coracao_vazio.png';
  s2Cheio = '/assets/coracao_cheio.png';

  coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
    // nao é necessário os outros paramêtros pois na classe estão default.
  ];

  ngOnInit() {
  }

}
