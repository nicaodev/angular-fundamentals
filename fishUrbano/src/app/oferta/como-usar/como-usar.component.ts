import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  comoUsar: string = '';

  ngOnInit() {

    this.ofertasService.getComoUsarOfertaId(this.router.parent.snapshot.params['id'])
      .then((resposta: string) => {
        this.comoUsar = resposta;
      });
  }

}
