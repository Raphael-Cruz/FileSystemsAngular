import { Component } from '@angular/core';
import { listaPreco } from '../../../vendas/vendas-data';
import { consultaProposta } from '../../../vendas/vendas-data';

@Component({
  selector: 'app-consulta-proposta',
  templateUrl: './consulta-proposta.component.html',
  styleUrls: ['./consulta-proposta.component.css']
})
export class ConsultaPropostaComponent {
  lista = listaPreco
  listaProposta = consultaProposta

}
