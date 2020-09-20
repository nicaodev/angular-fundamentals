import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { URL_API } from 'src/environments/app.api';
import { Pedido } from '../shared/pedido.model';

import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {
  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): Observable<any> {
    // URL, BOdY e Headers

    let headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido), { headers: headers }
    ).pipe(map(
      (response: Response) =>  response.json().id
    ));
  }
}
