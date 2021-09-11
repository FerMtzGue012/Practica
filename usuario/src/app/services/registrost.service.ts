import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Regis } from '../models/registros';

@Injectable({
  providedIn: 'root'
})
export class RegistrostService {
  API_REG='http://localhost:3000';

  constructor(private http: HttpClient) { }

getRegistro(){
return this.http.get (`${this.API_REG}/almacen`);

}

sumaRegistro(clase:string){
 return this.http.get (`${this.API_REG}/almacen/${clase}`);
  }


saveRegistro(registro:Regis){
  return this.http.post (`${this.API_REG}/almacen`,registro);
  }

 

}
