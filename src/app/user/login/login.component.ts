import { Component, OnInit, Input } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{

 

  alertMsg = 'Estamos te conectando ao sistema!'
  alertColor = 'blue'
  showAlert = false
  inSubmission = false
  


 constructor(
  private auth: AngularFireAuth,
  public loggin: AuthService
  ){}

  credentials = {
    email: '',
    login:'',
    password: ''
  }


  ngOnInit(): void {}


async onSubmit() {

    
    this.showAlert = true
    this.alertMsg = 'Please wait! We are loggin you in'
    this.alertColor = 'blue'
    this.inSubmission = true

    

  try{

    await this.auth.signInWithEmailAndPassword(
      this.credentials.email, this.credentials.password
    )

    
  } catch(e){
   
  this.alertMsg = "An unexpected error ocurred. Please try again later!"
  this.alertColor = 'red' 
  this.inSubmission = false
  console.log(e)

  return
  }
  this.alertMsg = 'Sucess! Your are logged in'
  this.alertColor = 'green' 
  setTimeout(() => {
    this.loggin.isLogged = true
  }, 
  1000);
}
}
