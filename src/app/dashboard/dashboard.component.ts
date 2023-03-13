
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener, Input} from '@angular/core';
import { navbarData } from './nav-data';
import { fadeInOut, INavbarData } from '../models/helper';

import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})





export class DashboardComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  @Input() multiple: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() collapsed: boolean = false


  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
       items: []
  }

  dropMenu: boolean = false;
  screenWidth = 0;
  mobileView = false;
  isActive: boolean = false;
  navData = navbarData;
  arrocha: boolean = false;
 

  

  constructor(
    public router: Router
   ) {
    
  }
  


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.mobileView = true
      this.collapsed = true
      
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }




  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.toggleCollapse()
    
}

OpenMobileNav($event?: Event){
  $event?.preventDefault()
  this.collapsed = !this.collapsed

}
toggleMenu() {
  this.dropMenu = !this.dropMenu;
  this.isActive = !this.isActive;
}

handleClick(item: any): void {
  


  item.expanded = !item.expanded;
  item.multiple = !item.multiple;

  console.log("expanded",  item.expanded)
  console.log("multiple",  item.expanded)
  this.getActiveClass(item)
  
  }
  
  getActiveClass(item: INavbarData): string {
    console.log("active class")
    return item.expanded && this.router.url.includes(item.routeLink) 
      ? 'active-sublevel'
      : '';
  
  }

toggleCollapse(): void {
  this.collapsed = !this.collapsed;

  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}



}







