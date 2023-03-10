
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { NgOptimizedImage } from '@angular/common'

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
 


  dropMenu: boolean = false;
  screenWidth = 0;



  mobileView = false;
  collapsed = false;
  isActive: boolean = false;
  navData = navbarData;
  
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

OpenMobileNav($event?: Event){
  $event?.preventDefault()
  this.collapsed = !this.collapsed
  console.log("mobile menu")
}
toggleMenu() {
  this.dropMenu = !this.dropMenu;
  this.isActive = !this.isActive;
}



}







