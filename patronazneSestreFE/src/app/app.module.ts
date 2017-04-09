import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { PrijavaComponent } from './prijava.component';
import { RegistracijaFormComponent } from './registracija.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule ],
  declarations: [ AppComponent,DashboardComponent,PrijavaComponent,RegistracijaFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
