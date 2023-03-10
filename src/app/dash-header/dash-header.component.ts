import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})


export class DashHeaderComponent {

  isOpen: boolean = false;
  




  closeBtn() {
    this.isOpen = false;
  }

  
 

  openBtn($event?: Event ) {
    $event?.preventDefault()
    this.isOpen = !this.isOpen;
  }

  
  
}
