import { Component,HostBinding,OnInit } from '@angular/core';
import {RegistrostService} from '../../services/registrost.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  reg:any=[ ];
  
  


  constructor(private registrostService:RegistrostService) {}

  ngOnInit(){
   
    this.registrostService.getRegistro().subscribe(res =>{
      this.reg=res;
     },
     err=> console.error(err)
     ); 

  
  }

 
}
