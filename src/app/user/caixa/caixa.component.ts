import { Component } from '@angular/core';
import { caixaDataEntrada, caixaDataSaida } from './caixa-data';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent {

dataEntrada = caixaDataEntrada;
dataSaida = caixaDataSaida;
}
