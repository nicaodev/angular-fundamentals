import { Oferta } from '../shared/oferta.model';
import { URL_API } from 'src/environments/app.api';

import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


// Decorandoo service com injectable para ser possivel que esta classe receber um serviço externo.
@Injectable()
export class OfertasService {

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar uma requisição http e retornar uma promise Oferta[]

    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasRestaurante(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((retorno: any) => retorno.json());
  }

  public getOfertasDiversao(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((retorno: any) => retorno.json());
  }
  public getOfertaId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((retorno: any) => retorno.json().shift()/*ou [0]*/);
  }

  public getComoUsarOfertaId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((retorno: any) => retorno.json().shift().descricao);
  }

  public getOndeFicaOfertaId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((r: any) => r.json()[0].descricao);
  }
  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)// '_like' Busca por aproximação somente p API FAKE json-serve
      .pipe(map((response: any) => response.json()));
  }
}

