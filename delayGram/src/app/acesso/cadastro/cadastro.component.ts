import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  @Output() mostraPainelLogin: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  exibirPainelLogin() {
    this.mostraPainelLogin.emit('login');
  }

}
