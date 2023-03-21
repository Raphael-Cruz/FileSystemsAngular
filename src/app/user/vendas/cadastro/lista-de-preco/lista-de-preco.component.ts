import { Component } from '@angular/core';
import { listaPreco } from '../produto/vendas-data';

@Component({
  selector: 'app-lista-de-preco',
  templateUrl: './lista-de-preco.component.html',
  styleUrls: ['./lista-de-preco.component.css']
})
export class ListaDePrecoComponent {

  lista = listaPreco
  searchText: any;

}
