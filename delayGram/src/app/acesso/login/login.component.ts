import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() mostraPainelCadastro: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  exibirPainelCadastro(): void {
    this.mostraPainelCadastro.emit('cadastro');
  }

}
