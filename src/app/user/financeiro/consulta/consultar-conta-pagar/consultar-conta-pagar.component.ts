import { Component } from '@angular/core';
import { contasPagar } from '../../financeiro-data';

@Component({
  selector: 'app-consultar-conta-pagar',
  templateUrl: './consultar-conta-pagar.component.html',
  styleUrls: ['./consultar-conta-pagar.component.css']
})
export class ConsultarContaPagarComponent {

  contasPagar = contasPagar
}
