import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  oferta: Oferta;

  constructor(private route: ActivatedRoute,
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {

      this.ofertaService.getOfertaId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });
  }

  adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}
