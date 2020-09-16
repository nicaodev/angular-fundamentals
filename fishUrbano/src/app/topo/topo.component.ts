import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
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

  // Criando 'Proxy'. É tanto um objservable quanto um observável quanto um obsevador.
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(debounceTime(500)) // Executa a ação a cada 1 segundo.
      .pipe(switchMap((termo: string) => {
        return this.ofertaService.pesquisaOfertas(termo);
      }));

    this.ofertas.subscribe((retorno: Oferta[]) => console.log(retorno));
  }

  public pesquisa(termoBusca: string): void {
    // (<HTMLInputElement>event.target).value; // Usando uma var de referencia no html.
    // this.ofertas = this.ofertaService.pesquisaOfertas(termoBusca);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log(erro)
    // );

    // Utilizando um obsevable capaz de gerenciar os eventos criados e automaticamente manter
    // a inscrição apenas no último para o termoBusca.

    this.subjectPesquisa.next(termoBusca);

  }

}
