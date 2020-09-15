import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.ofertasService.getOndeFicaOfertaId(this.route.parent.snapshot.params['id'])
      .then((retorno: string) => {
        this.ondeFica = retorno;
      });
  }

}
