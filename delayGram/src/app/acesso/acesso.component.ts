import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void=> criado', [
        style({ opacity: 0, transform: 'translate(-50px, 0)' }),
        animate('500ms 500ms ease-in-out') // duracao, delay e/ou aceleracao.
      ])
    ]),

    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void=> criado', [
        style({ opacity: 0, transform: 'translate(50px, 0)' }),
        animate('500ms 500ms ease-in-out') // duracao, delay e/ou aceleracao.
      ])
    ])
  ]
})

export class AcessoComponent implements OnInit {

  estadoBanner = 'criado';
  estadoPainel = 'criado';

  constructor() { }

  ngOnInit() {
  }

}
