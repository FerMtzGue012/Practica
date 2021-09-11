import { Component, HostBinding, OnInit } from '@angular/core';
import { Regis } from 'src/app/models/registros';
import {RegistrostService} from '../../services/registrost.service';
@Component({
  selector: 'app-formregistro',
  templateUrl: './formregistro.component.html',
  styleUrls: ['./formregistro.component.css']
})
export class FormregistroComponent implements OnInit {

  @HostBinding ('class') classes='row';
  
registro:Regis={
id:0,
cantidad:0,
clase: '', 
modelo:'', 
material:'', 
color:'', 
altura_mm:0,
diasuperior_mm:0,
diainferior_mm:0,
capacidad_ml:0,
created_at:new Date()

  };



  constructor(private registrostService:RegistrostService) {}

  ngOnInit(){
  }

  guardarRe(){

    delete this.registro.id;
    delete this.registro.created_at;
    console.log(this.registro);
    
    this.registrostService.saveRegistro (this.registro)
    .subscribe(
      res=>{
        console.log(res);
        alert("Registro Guardado");
      },
      err=> console.error(err)
      
    )
  }


  }



