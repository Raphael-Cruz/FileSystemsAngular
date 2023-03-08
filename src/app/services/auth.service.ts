import { Injectable } from '@angular/core';
import { dataBase } from 'src/assets/data/data';
import IClient from '../models/clients.model';



@Injectable({
  providedIn: 'root'
})




export class AuthService {

db = dataBase

  public isLogged = false
  
  constructor(
    
  ) {}
createClient(){
  console.log("cliente Created")
}
}

