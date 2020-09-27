import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  @Output() mostraPainelLogin: EventEmitter<string> = new EventEmitter();

  formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  });

  ngOnInit() {
  }

  exibirPainelLogin() {
    this.mostraPainelLogin.emit('login');
  }

  cadastrarUsuario(): void {


    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );

    console.log('oq2', usuario);
  }

}
