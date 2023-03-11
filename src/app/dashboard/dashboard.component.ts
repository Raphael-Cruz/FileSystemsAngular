
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
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), 
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})





export class DashboardComponent implements OnInit {



  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
 
  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    multiple: true,
   
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;


  dropMenu: boolean = false;
  screenWidth = 0;



  mobileView = false;
  isActive: boolean = false;
  navData = navbarData;

 
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
    
}

OpenMobileNav($event?: Event){
  $event?.preventDefault()
  this.collapsed = !this.collapsed

}
toggleMenu() {
  this.dropMenu = !this.dropMenu;
  this.isActive = !this.isActive;
}

handleClick(item: INavbarData): void {
  console.log("clicou")
  this.shrinkItems(item);
  
  
}

shrinkItems(item: INavbarData): void {
  if (item.expanded) {
    for(let modelItem of this.navData) {
     if(modelItem.expanded && modelItem.multiple){
        modelItem.expanded = !modelItem.expanded;
        console.log("item expandido")
       }
      
    }
  }
}
getActiveClass(item: INavbarData): string {
  return item.expanded && this.router.url.includes(item.routeLink) 
    ? 'active-sublevel' 
    : '';
}
}







