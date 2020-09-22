import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordemCompra',
  templateUrl: './ordemCompra.component.html',
  styleUrls: ['./ordemCompra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  formulario = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null)
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() { }

  confirmarCompra(): void {

    console.log('oque tem', this.formulario);
  }

}
