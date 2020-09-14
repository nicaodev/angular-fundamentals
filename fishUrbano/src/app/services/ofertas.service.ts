import { Oferta } from '../shared/oferta.model';
import { promise } from 'protractor';

import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/environments/app.api';

// Decorandoo service com injectable para ser possivel que esta classe receber um serviço externo.
@Injectable()
export class OfertasService {

  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    // Efetuar uma requisição http e retornar uma promise Oferta[]

    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasRestaurante(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
    .toPromise()
      .then((retorno: any) => retorno.json());
  }

  public getOfertasDiversao (categoria: string): Promise<Oferta[]>{
    return this.http.get(`${URL_API}?categoria=${categoria}`)
    .toPromise()
      .then((retorno: any) => retorno.json());
  }
  public getOfertaId (id: number): Promise<Oferta>{
    return this.http.get(`${URL_API}?id=${id}`)
    .toPromise()
      .then((retorno: any) => retorno.json().shift()/*ou [0]*/);
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

