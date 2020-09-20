import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordemCompraSucesso',
  templateUrl: './ordemCompraSucesso.component.html',
  styleUrls: ['./ordemCompraSucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  constructor() { }

  @Input() idPedidoCompra: number;

  ngOnInit() {
  }

}
