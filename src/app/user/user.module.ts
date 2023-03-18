import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterClientComponent } from './register.client/register.client.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { DashHeaderComponent } from '../dash-header/dash-header.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalComponent } from '../shared/modal/modal.component';
import { CaixaComponent } from './caixa/caixa.component';
import { EntidadeComponent } from './caixa/entidade/entidade.component';
import { SaidaComponent } from './caixa/saida/saida.component';

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
         SaidaComponent
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
    SaidaComponent
  ]
})
export class UserModule { }
