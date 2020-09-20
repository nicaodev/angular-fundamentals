import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';



@Component({
  selector: 'app-ordemCompra',
  templateUrl: './ordemCompra.component.html',
  styleUrls: ['./ordemCompra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';
  // Controle de validação dos campos
  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  // estados primitivos dos campos (pristine)

  enderecoEstadoPrimitivo = true;
  numeroEstadoPrimitivo = true;
  complementoEstadoPrimitivo = true;
  formaPagamentoEstadoPrimitivo = true;

  formValido = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    // this.ordemCompraService.efetivarCompra();
  }

  atualizaEndereco(input: string): void {
    this.endereco = input;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }
  atualizaNum(input: string): void {
    this.numero = input;
    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();

  }
  atualizaComplemento(input: string): void {
    this.complemento = input;
    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  atualizaFormaPag(input: string): void {
    this.formaPagamento = input;
    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formValido = '';
    } else {
      this.formValido = 'disabled';
    }

  }

}
