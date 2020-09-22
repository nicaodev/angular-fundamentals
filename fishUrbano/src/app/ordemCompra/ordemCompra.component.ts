import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordemCompra',
  templateUrl: './ordemCompra.component.html',
  styleUrls: ['./ordemCompra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  idPedidoCompra: number;
  // Através da ViewChild informa uma var do template(formulario) cujos valores serão atribuidos ao tributo da classe(form).
  @ViewChild('formulario') form: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  confirmarCompra(): void {

    let pedido: Pedido = new Pedido(this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaPagamento
    );
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => this.idPedidoCompra = idPedido);
  }


}
