import { Component,Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent {

  @Input() modalID = ''

  constructor(public modal: ModalService){

  }

  onInit(){

  }
  
  closeModal() {

    this.modal.toggleModal(this.modalID)
  }

}
