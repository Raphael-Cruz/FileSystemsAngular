import { Component } from '@angular/core';
import { saida } from '../caixa-data';
@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent {
  saida= saida;
}
