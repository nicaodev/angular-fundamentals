import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] // injetando serviços no escopo componente
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[];

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas();
    console.log('tem oferta', this.ofertas);
  }

}
