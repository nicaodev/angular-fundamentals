import { Oferta } from '../shared/oferta.model';
import { promise } from 'protractor';

import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/environments/app.api';

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

  // public getOfertasPromise(): Promise<Oferta[]> {
  //   return new Promise((resolve, reject) => {
  //     // Alguma lógica de requisição que ao finalizar chama o 'resolve'.
  //     let deu_certo = false; // logica hipotética.

  //     if (!deu_certo) {
  //       setTimeout(() => resolve(this.ofertas), 1000); // simulando uma requisição.
  //     } else {
  //       reject({ codigo_erro: 404, msg: 'Lógica hipotética apenas para simular erro' });
  //     }

  //   });
  // }

}

