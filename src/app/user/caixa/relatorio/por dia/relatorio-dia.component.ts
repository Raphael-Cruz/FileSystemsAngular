import { Component } from '@angular/core';
import { caixaDataEntrada, caixaDataSaida } from '../../caixa-data';

@Component({
  selector: 'app-relatorio-dia',
  templateUrl: './relatorio-dia.component.html',
  styleUrls: ['./relatorio-dia.component.css']
})
export class RelatorioDiaComponent {

  dataEntrada = caixaDataEntrada;
  dataSaida = caixaDataSaida;

}
