import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordemCompra',
  templateUrl: './ordemCompra.component.html',
  styleUrls: ['./ordemCompra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: number = 23;
  complemento: string = '';
  formaPagamento: string = '';
  constructor() { }

  ngOnInit() {
  }

  atualizaEndereco(input: string): void {
    this.endereco = input;
  }
  atualizaNum(input: number): void {
    this.numero = input;
  }
  atualizaComplemento(input: string): void {
    this.complemento = input;
  }

  atualizaFormaPag(input: string): void {
    this.formaPagamento = input;
  }

}
