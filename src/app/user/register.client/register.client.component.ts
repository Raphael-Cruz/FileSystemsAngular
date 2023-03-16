import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.client.component.html',
  styleUrls: ['./register.client.component.css']
})
export class RegisterClientComponent {

  constructor(
    private db: AngularFirestore
  ){}
  
  nome = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  cpf = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  logradouro = new FormControl('', [
    Validators.required,
   
  ])
  referencia = new  FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  bairro = new FormControl('', [
    Validators.required
  ])
  uf = new FormControl('', [
    Validators.required,
    
  ])
  telefone = new FormControl('', [
    Validators.required
  ])
  showAlert = false
  alertMsg = 'Please wait! Your account is being created.'
  alertColor = 'blue'

  registerForm = new FormGroup({
    nome: this.nome,
    cpf: this.cpf,
    logradouro: this.logradouro,
    referencia: this.referencia,
    bairro: this.bairro,
    uf: this.uf,
    telefone:this.telefone
  })


  async register() {
    //reseting the alert to default
  this.showAlert = true
  this.alertMsg = 'Please wait! Your account is being created.'
  this.alertColor = 'blue'

    
  try {

    this.db.collection('clientes').add({
      nome: this.nome.value,
      cpf: this.cpf.value,
      logradouro: this.logradouro.value,
      referencia: this.referencia.value,
      bairro: this.bairro.value,
      uf: this.uf.value,
      telefone:this.telefone.value
    })

  } catch(e) {
    console.log(e)

      // handling alerts
    this.alertMsg = "An unexpected error ocurred. Please try again later"
    this.alertColor = 'red' //sets new alert color.

    return
  }
    this.alertMsg = 'Sucess! Your account has been created'
    this.alertColor = 'green'
}

}
