import { Component } from '@angular/core';
import { entidade } from '../caixa-data';
@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.css']
})
export class EntidadeComponent {

  entidade= entidade;

}
