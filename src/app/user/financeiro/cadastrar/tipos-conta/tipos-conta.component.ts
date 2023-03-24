import { Component } from '@angular/core';
import { financeiroData } from '../../financeiro-data';

@Component({
  selector: 'app-tipos-conta',
  templateUrl: './tipos-conta.component.html',
  styleUrls: ['./tipos-conta.component.css']
})
export class TiposContaComponent {

  tipoConta = financeiroData
  search:  any

}
