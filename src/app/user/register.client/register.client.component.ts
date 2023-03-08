import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.client.component.html',
  styleUrls: ['./register.client.component.css']
})
export class RegisterClientComponent {
  nome = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  cpf = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  logradouro = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
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
    Validators.minLength(13),
    Validators.maxLength(13)
  ])
  telefone = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
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

  register() {
    this.showAlert = true
    this.alertMsg = 'Please wait! Your account is being created.'
    this.alertColor = 'blue'
  }
}
