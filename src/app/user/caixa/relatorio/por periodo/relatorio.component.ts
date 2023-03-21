import { Component } from '@angular/core';
import { caixaDataEntrada, caixaDataSaida } from '../../caixa-data';
@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

//RELATORIO POR PERIODO


  dataEntrada = caixaDataEntrada;
  dataSaida = caixaDataSaida;
}
