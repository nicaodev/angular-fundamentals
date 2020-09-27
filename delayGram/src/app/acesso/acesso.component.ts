import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
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
        animate('1000ms 250ms ease-in-out', keyframes([ // duracao, delay e/ou aceleracao.
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0)' }),

          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' })
        ]))
      ])
    ])
  ]
})

export class AcessoComponent implements OnInit {

  estadoBanner = 'criado';
  estadoPainel = 'criado';

  cadastro = false;

  constructor() { }

  ngOnInit() {
  }

  exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }

}
