import { Component} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Masterproject';



 
 constructor (public auth: AuthService){
 
 }
}
