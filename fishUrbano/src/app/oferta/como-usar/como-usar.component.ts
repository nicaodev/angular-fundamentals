import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private ofertasService: OfertasService) { }

  comoUsar = '';

  ngOnInit() {

    this.router.parent.params.subscribe((parametroPai: Params) => {

      this.ofertasService.getComoUsarOfertaId(parametroPai.id)
        .then((resposta: string) => {
          this.comoUsar = resposta;
        });
    })
  }
}
