import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NewModalComponent } from './new-modal/new-modal.component';





@NgModule({
  declarations: [
    ModalComponent,
    NewModalComponent
    
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    NewModalComponent
    
  ],

})
export class SharedModule { }
