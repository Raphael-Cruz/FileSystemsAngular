import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import IClient from 'src/app/models/clients.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent implements OnInit{

  client!: IClient[];

constructor(
  public modal: ModalService
){}

ngOnInit(): void {
  this.modal.register('edit')

}

}
