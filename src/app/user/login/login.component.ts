import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"

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
  


  //constructor(){}
  constructor(private http: HttpClient){}
  credentials = {
    email: '',
    login:'',
    password: ''
  }


  ngOnInit(): void {}


async onSubmit() {



  await (
    this.http.post('', this.credentials),
   
  
   console.log(this.credentials)
  )
  
  try{

    this.showAlert = true
    this.alertMsg = 'Estamos te conectando ao sistema!'
    this.alertColor = 'blue'
    
  } catch(e){
    
  this.showAlert = true
  this.alertMsg = 'Um erro aconteceu, tente novamente mais tarde!'
  this.alertColor = 'red'
  }

  this.showAlert = true
  this.alertMsg = 'Sucesso!!!!!!!! Voce esta logado no sistema!'
  this.alertColor = 'green'
}
}
