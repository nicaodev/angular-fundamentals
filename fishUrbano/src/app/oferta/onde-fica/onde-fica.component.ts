import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ondeFica = '';

  ngOnInit() {
    this.route.parent.params.subscribe((parametroPai: Params) => {

      this.ofertasService.getOndeFicaOfertaId(parametroPai.id)
        .then((retorno: string) => {
          this.ondeFica = retorno;
        });
    });
  }
}
