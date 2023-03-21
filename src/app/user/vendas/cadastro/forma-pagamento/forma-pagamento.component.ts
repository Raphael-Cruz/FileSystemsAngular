import { Component } from '@angular/core';
import { formaPagamento } from '../produto/vendas-data';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent {

  formaPagamento = formaPagamento;
  searchText: any;
}
