import { Component } from '@angular/core';
import { listaPreco } from '../../../vendas/vendas-data';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent {

  
  lista = listaPreco
  searchText: any;

}
