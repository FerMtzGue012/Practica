import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormregistroComponent } from './componentes/formregistro/formregistro.component';
import { StockComponent } from './componentes/stock/stock.component';
import {RegistrostService} from './services/registrost.service';
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormregistroComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  RegistrostService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
