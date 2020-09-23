import { ItemCarrinho } from '../shared/item-carrinho.model';
import { Oferta } from '../shared/oferta.model';

export class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    // Verificando se item já existe no obj. Se sim, incrementa quantidade. Se não, inclui.
    let jaExiste = this.itens.find((i: ItemCarrinho) => i.id === itemCarrinho.id);
    if (jaExiste) {
      jaExiste.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }

  }
  public totalCarrinhoCompras(): number {
    let total = 0;
    this.itens.map((i: ItemCarrinho) => {
      total = total + (i.valor * i.quantidade); // Ao incluir vários itens iguais somente a quantidade muda.
    });
    return total;
  }

  public alterarQuantidade(itemCarrinho: ItemCarrinho, operador: string): void {
    let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

    if (itemEncontrado && operador === '+') {
      itemEncontrado.quantidade += 1;
    } else if (itemEncontrado && operador === '-') {
      itemEncontrado.quantidade -= 1;
    }
  }

}

