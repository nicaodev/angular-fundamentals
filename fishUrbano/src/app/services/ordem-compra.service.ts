import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { URL_API } from 'src/environments/app.api';
import { Pedido } from '../shared/pedido.model';

@Injectable()
export class OrdemCompraService {
  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): Observable<any> {
    // URL, BOdY e Headers

    let headers: Headers = new Headers();
    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({headers: headers})
    )
  }
}
