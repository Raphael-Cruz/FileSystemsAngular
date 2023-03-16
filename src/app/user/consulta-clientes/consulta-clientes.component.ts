import { Component, OnInit, Input} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';
import IClient from 'src/app/models/clients.model';


@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})



export class ConsultaClientesComponent implements OnInit {
 

  clients!: IClient[];
 
  icon: string = "fal fa-pen";
  searchText: any;

  constructor(
    public modal: ModalService,
    private Auth: AuthService

    ) {}

  ngOnInit() {
      this.Auth.getClients().subscribe(clientes =>{
        //console.log(clientes)
        this.clients = clientes
      }) 
    }

    openModal($event: Event) {
      $event.preventDefault()
  
      this.modal.toggleModal('edit')
     
  
    }
}