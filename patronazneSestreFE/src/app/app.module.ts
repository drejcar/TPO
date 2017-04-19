import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaFormComponent } from './registracija/registracija.component';
import { DelovniNalogComponent } from './delovniNalog/delovniNalog.component';
import { PageNotFoundComponent } from './not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { EqualValidator } from './equal-validator.directive';

import {UporabnikService} from "./registracija/uporabnik.service";
import {UserService} from "./prijava/user.service";
import {PacientGuard} from "./_guard/pacient.guard";
import {ZdravnikGuard} from "./_guard/zdravnik.guard";
import {PatronaznaSluzbaGuard} from "./_guard/patronaznasluzba.guard";
import {PatronaznaSestraGuard} from "./_guard/patronaznasestra.guard";
import {AdministratorGuard} from "./_guard/administrator.guard";
import {SodelavecIZSGuard} from "./_guard/sodelavecizs.guard";
import {Registracija_zdComponent} from "./registracija_zd/registracija_zd.component";
import {SpremembaGeslaComponent} from "./spremembaGesla.component";
import {AdminDashComponent} from "./loggedindash/admindash/admindash.component";
import {PacientDashComponent} from "./loggedindash/pacientdash/pacientdash.component";
import {PatronaznaSestraDashComponent} from "./loggedindash/patronaznasestradash/patronaznasestradash.component";
import {PatronaznaSluzbaDashComponent} from "./loggedindash/patronaznasluzbadash/patronaznasluzbadash.component";
import {SodelavecIzsDashComponent} from "./loggedindash/sodelavecizsdash/sodelavecizsdash.component";
import {ZdravnikDashComponent} from "./loggedindash/zdravnikdash/zdravnikdash.component";
import {AktivacijaComponent} from "./registracija/aktivacija.component";

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule],
  declarations: [ AppComponent,DashboardComponent,PrijavaComponent,RegistracijaFormComponent,
                  DelovniNalogComponent, EqualValidator,PageNotFoundComponent,Registracija_zdComponent,
                  SpremembaGeslaComponent,AdminDashComponent,PacientDashComponent,
                  PatronaznaSestraDashComponent,PatronaznaSluzbaDashComponent,SodelavecIzsDashComponent,
                  ZdravnikDashComponent,AktivacijaComponent
                ],
  providers:    [ UserService,PacientGuard,ZdravnikGuard,PatronaznaSluzbaGuard,
                  PatronaznaSestraGuard,AdministratorGuard,SodelavecIZSGuard,UporabnikService,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
