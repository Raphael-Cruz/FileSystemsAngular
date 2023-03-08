import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterClientComponent } from './register.client/register.client.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [
    
    AuthModalComponent,
         LoginComponent,
         RegisterClientComponent,
         DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AuthModalComponent,
    LoginComponent,
    RegisterClientComponent,
    DashboardComponent
 
  ]
})
export class UserModule { }
