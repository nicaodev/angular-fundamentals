import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordemCompra',
  templateUrl: './ordemCompra.component.html',
  styleUrls: ['./ordemCompra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  formulario = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, Validators.required)
  });

  idPedidoCompra: number;
  itensCarrinho: ItemCarrinho[] = [];

  constructor(private ordemCompraService: OrdemCompraService, private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  confirmarCompra(): void {

    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    } else {
      let pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      );
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedidoCompra = idPedido;
        });
    }
  }
  adiciona(item: ItemCarrinho, operador: string): void {
    this.carrinhoService.alterarQuantidade(item, operador);

  }

}
