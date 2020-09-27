import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Autenticacao } from 'src/app/services/autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() mostraPainelCadastro: EventEmitter<string> = new EventEmitter<string>();

  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  });

  constructor(private auth: Autenticacao) { }

  ngOnInit() {
  }

  exibirPainelCadastro(): void {
    this.mostraPainelCadastro.emit('cadastro');
  }
  autenticar(): void {

    this.auth.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    );
  }
}
