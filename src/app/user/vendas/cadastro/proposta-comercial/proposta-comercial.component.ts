import { Component } from '@angular/core';

import { listaPreco } from '../../vendas-data';

@Component({
  selector: 'app-proposta-comercial',
  templateUrl: './proposta-comercial.component.html',
  styleUrls: ['./proposta-comercial.component.css']
})
export class PropostaComercialComponent {

  lista = listaPreco
 

}
