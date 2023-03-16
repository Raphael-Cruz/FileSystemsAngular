import { Injectable } from '@angular/core';
import { dataBase } from 'src/assets/data/data';
import IClient from '../models/clients.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})




export class AuthService {
  Items: Observable<IClient[]>;
db = dataBase

public isLogged = false
  
  constructor(
    public afs: AngularFirestore,
    
  
  ) {
    this.Items = this.afs.collection<IClient>('clientes').valueChanges() as Observable<IClient[]>;
  }


getClients (){
  return this.Items
}

  createClient(){
  console.log("cliente Created")
}
}

