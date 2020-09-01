import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  s2Vazio = '/assets/coracao_vazio.png';
  s2Cheio = '/assets/coracao_cheio.png';

  ngOnInit() {
  }

}
