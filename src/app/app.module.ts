import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environment/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
