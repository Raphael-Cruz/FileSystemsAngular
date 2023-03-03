import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';







@NgModule({
  declarations: [
    ModalComponent,

    AlertComponent,


    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
 
    AlertComponent
    
  ],

})
export class SharedModule { }
