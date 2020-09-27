import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../models/imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  estadoAnimacaoInicial = 'visivel';
  imagens: Imagem[] = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png' }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 3000);
  }
  public logicaRotacao(): void {

    // Auxlia na exibição da imagem seguinte.
    let aux: number;

    for (let i = 0; i <= this.imagens.length; i++) {

      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        aux = i === 4 ? 0 : i + 1; // loop no array.
        break;
      }
    }
    // Próxima img
    this.imagens[aux].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 3000);
  }
}
