import { Component, OnInit} from '@angular/core';

import { ModalService } from '../services/modal.service';
import IClient from 'src/app/models/clients.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit{

  client!: IClient[];

constructor(
  public modal: ModalService
){}

ngOnInit(): void {
  this.modal.register('edit')

}

}
