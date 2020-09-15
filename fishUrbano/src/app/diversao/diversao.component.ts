import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  categoriaFiltro = 'diversao';
  ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertasDiversao(this.categoriaFiltro)
      .then((oferta: Oferta[]) => {
        this.ofertas = oferta;
      });
  }

}
