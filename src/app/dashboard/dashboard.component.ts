import { Component } from '@angular/core';



  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isOpen = false

  openBtn($event?: Event) {
    this.isOpen = !this.isOpen;
  }

  closeBtn() {
    if( this.isOpen){
      this.openBtn(undefined);
    }
    
  }


}
  


