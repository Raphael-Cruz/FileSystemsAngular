
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})





export class DashboardComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
 
  screenWidth = 0;

  mobileView = false;
  collapsed = false;
  isOpen: boolean = false;
  dropMenu: boolean = false;
  isActive: boolean = false;

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.mobileView = true
      this.collapsed = true
      
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
}


  toggleMenu() {
    this.dropMenu = !this.dropMenu;
    this.isActive = !this.isActive;
  }

  openBtn($event?: Event ) {
    $event?.preventDefault()
    this.isOpen = !this.isOpen;
  }

  closeBtn() {
    this.isOpen = false;
  }

  OpenMobileNav($event?: Event){
    $event?.preventDefault()
    this.collapsed = !this.collapsed
    console.log("mobile menu")
  }
}







