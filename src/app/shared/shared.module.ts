import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { AppRoutingModule } from '../app-routing.module';






@NgModule({
  declarations: [
    ModalComponent,
      AlertComponent,
     InputComponent


    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ModalComponent,
    InputComponent,
    AlertComponent,
    CommonModule,
    AppRoutingModule
    

    
  ],

})
export class SharedModule { }
