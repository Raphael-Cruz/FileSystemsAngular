import { Component, Output, EventEmitter, OnInit, HostListener, Input} from '@angular/core';
import { navbarData } from './nav-data';
import {INavbarData } from '../models/helper';

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
  
multiple = false;

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
  navData = navbarData;

 
  mobileView = false;
  isActive: boolean = false;
  

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
  this.navData.forEach(data => {
    if (data !== item) {
      data.expanded = false;
    }
  });
  
}

handleSubMenuClick(item: any): void {
  item.expanded = !item.expanded;
  this.navData.forEach(data => {
    if (data.items) {
      data.items.forEach(subItem => {
        if (subItem !== item) {
          subItem.expanded = false;
        }
      });
    }
  });
}



 
toggleCollapse(): void {
  this.collapsed = !this.collapsed;

  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}


shrinkItems(item: INavbarData): void {
  if (this.multiple) {
    for(let modelItem of this.navData) {
      if (item !== modelItem && modelItem.expanded) {
        modelItem.expanded =  !modelItem.expanded;
        this.multiple = !this.multiple;
        console.log("after click expanded:",  item.expanded)
      }
    }
  }
}

}










