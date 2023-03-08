import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { DashboardComponent } from '../dashboard/dashboard.component';







@NgModule({
  declarations: [
    ModalComponent,
   
    AlertComponent,
     InputComponent,


    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    InputComponent,
    AlertComponent,
    

    
  ],

})
export class SharedModule { }
