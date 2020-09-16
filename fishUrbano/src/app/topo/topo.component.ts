import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pesquisa(termoBusca: string): void {
    // (<HTMLInputElement>event.target).value; // Usando uma var de referencia no html.
    console.log(termoBusca);
  }

}
