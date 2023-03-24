import { Component } from '@angular/core';
import { contasPagar } from '../../financeiro-data';

@Component({
  selector: 'app-consultar-conta-receber',
  templateUrl: './consultar-conta-receber.component.html',
  styleUrls: ['./consultar-conta-receber.component.css']
})
export class ConsultarContaReceberComponent {

  contasReceber = contasPagar
}
