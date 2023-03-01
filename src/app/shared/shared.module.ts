import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NewModalComponent } from './new-modal/new-modal.component';
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    ModalComponent,
    NewModalComponent,


    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ModalComponent,
    NewModalComponent
    
  ],

})
export class SharedModule { }
