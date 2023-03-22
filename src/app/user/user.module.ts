import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Shared
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from '../shared/modal/modal.component';

//User
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';



//Dashboard Layout
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { DashHeaderComponent } from '../dash-header/dash-header.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Clientes 
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { RegisterClientComponent } from './register.client/register.client.component';

//Caixa
import { CaixaComponent } from './caixa/caixa.component';
import { EntidadeComponent } from './caixa/entidade/entidade.component';
import { SaidaComponent } from './caixa/saida/saida.component';
import { RelatorioComponent } from './caixa/relatorio/por periodo/relatorio.component';
import { RelatorioDiaComponent } from './caixa/relatorio/por dia/relatorio-dia.component';

//Vendas
import { ProdutoComponent } from './vendas/cadastro/produto/produto.component';
import { SituacaoPropostaComponent } from './vendas/cadastro/situacao-proposta/situacao-proposta.component';
import { FormaPagamentoComponent } from './vendas/cadastro/forma-pagamento/forma-pagamento.component';
import { ListaDePrecoComponent } from './vendas/cadastro/lista-de-preco/lista-de-preco.component';
import { ConsultaProdutoComponent } from './vendas/consulta/consulta-produto/consulta-produto.component';
import { PropostaComercialComponent } from './vendas/cadastro/proposta-comercial/proposta-comercial.component';

@NgModule({
  declarations: [
    
    AuthModalComponent,
         LoginComponent,
         RegisterClientComponent,
         DashboardComponent,
         FooterComponent,
         DashHeaderComponent,
         ConsultaClientesComponent,
         CaixaComponent,
         EntidadeComponent,
         SaidaComponent,
         RelatorioComponent,
         RelatorioDiaComponent,
         ProdutoComponent,
         SituacaoPropostaComponent,
         FormaPagamentoComponent,
         ListaDePrecoComponent,
         ConsultaProdutoComponent,
         PropostaComercialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  exports: [
    AuthModalComponent,
    LoginComponent,
    RegisterClientComponent,
    DashboardComponent,
    FooterComponent,
    DashHeaderComponent,
    ConsultaClientesComponent,
    ModalComponent,
    CaixaComponent,
    EntidadeComponent,
    SaidaComponent,
    RelatorioComponent,
    RelatorioDiaComponent,
    ProdutoComponent,
    SituacaoPropostaComponent,
    FormaPagamentoComponent,
    ListaDePrecoComponent,
    ConsultaProdutoComponent,
    PropostaComercialComponent
  ]
})
export class UserModule { }
