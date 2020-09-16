import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas: Observable<Oferta[]>;

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  public pesquisa(termoBusca: string): void {
    // (<HTMLInputElement>event.target).value; // Usando uma var de referencia no html.
    this.ofertas = this.ofertaService.pesquisaOfertas(termoBusca);
    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

}
