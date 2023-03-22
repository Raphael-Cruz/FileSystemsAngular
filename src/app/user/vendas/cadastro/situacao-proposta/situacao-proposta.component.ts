import { Component } from '@angular/core';
import { situacaoVendas } from '../../vendas-data';
@Component({
  selector: 'app-situacao-proposta',
  templateUrl: './situacao-proposta.component.html',
  styleUrls: ['./situacao-proposta.component.css']
})
export class SituacaoPropostaComponent {

  situacao = situacaoVendas;

}
