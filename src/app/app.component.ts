import { Component} from '@angular/core';
import { AuthService } from './services/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Masterproject';


  isSideNavCollapsed = true;
  screenWidth = 0;

 
 constructor (public auth: AuthService){ }


  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
 



}
