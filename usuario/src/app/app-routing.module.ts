import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {StockComponent} from './componentes/stock/stock.component';
import{FormregistroComponent} from './componentes/formregistro/formregistro.component';
const routes: Routes = [
  {
path:'',
redirectTo: `/almacen`,
pathMatch:'full'

  },
 
  {

    path:'almacen',
    component:StockComponent
  },

  {

    path:'almacen/ingresar',
    component:FormregistroComponent
 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
