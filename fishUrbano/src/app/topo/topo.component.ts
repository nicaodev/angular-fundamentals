import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
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
      .pipe(debounceTime(500))// Executa a ação a cada 0.5 segundo.
      .pipe(distinctUntilChanged()) // Verifica se o termo anterior pesquisado é igual o  atual enviado.
      .pipe(switchMap((termo: string) => {
        if (termo.trim() === '') {
          // retorna um obj array vazio
          return of<Oferta[]>([]);
        }
        return this.ofertaService.pesquisaOfertas(termo);
      }));

    this.ofertas.subscribe((retorno: Oferta[]) => console.log(retorno));
  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca);
  }
}
