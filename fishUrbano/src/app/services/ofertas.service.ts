import { Oferta } from '../shared/oferta.model';
import { URL_API } from 'src/environments/app.api';

import { HttpModule, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


// Decorandoo service com injectable para ser possivel que esta classe receber um serviço externo.
@Injectable()
export class OfertasService {

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar uma requisição http e retornar uma promise Oferta[]

    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json());
  }

  public getOfertasRestaurante(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((retorno: Response) => retorno.json());
  }

  public getOfertasDiversao(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((retorno: Response) => retorno.json());
  }
  public getOfertaId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((retorno: Response) => retorno.json().shift()/*ou [0]*/);
  }

  public getComoUsarOfertaId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((retorno: Response) => retorno.json().shift().descricao);
  }

  public getOndeFicaOfertaId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((r: Response) => r.json()[0].descricao);
  }
  public pesquisaOfertas(termo: string): Observable<Oferta[]> {

    // '_like' Busca por aproximação somente p API FAKE json-serve
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(retry(10))
      .pipe(map((response: Response) => response.json()));
  }
}

