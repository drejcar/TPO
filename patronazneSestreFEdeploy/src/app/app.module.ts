import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaFormComponent } from './registracija/registracija.component';
import { DelovniNalogComponent } from './delovniNalog/delovniNalog.component';
import { PageNotFoundComponent } from './not-found.component';
import { podrobnostiDNComponent } from './podrobnostiDN/podrobnostiDN.component';
import { preusmeriComponent } from './delovniNalog/preusmeri.component';
import { seznamObiskovComponent } from './seznamObiskov/seznamObiskov.component';
import { DatePipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { EqualValidator } from './equal-validator.directive';


import {izpisDNService} from './izpisDelovnihNalogov/izpisDN.service';
import {UporabnikService} from "./registracija/uporabnik.service";
import { zdravstveniDelavecService } from "./registracija_zd/zdravstveniDelavec.service";
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
import {GuestGuard} from "./_guard/guest.guard";
import {DelovniNalogGuard} from "./_guard/delovniNalog.guard";
import {OdjavaComponent} from "./odjava/odjava.component";
import { izpisDelovnihNalogovComponent } from './izpisDelovnihNalogov/izpisDelovnihNalogov.component';
import { IzpisDNGuard } from './_guard/izpisDN.guard';
import {PlaniranjeObiskovComponent} from "./planiranjeObiskov/planiranjeObiskov.component";
import {NadomescanjeComponent} from "./nadomescanje/nadomescanje.component";


@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,AppRoutingModule],
  declarations: [ AppComponent,DashboardComponent,PrijavaComponent,RegistracijaFormComponent,
                  DelovniNalogComponent, EqualValidator,PageNotFoundComponent,Registracija_zdComponent,
                  SpremembaGeslaComponent,AdminDashComponent,PacientDashComponent,
                  PatronaznaSestraDashComponent,PatronaznaSluzbaDashComponent,SodelavecIzsDashComponent,
                  ZdravnikDashComponent,AktivacijaComponent,OdjavaComponent,izpisDelovnihNalogovComponent,podrobnostiDNComponent,
				          preusmeriComponent,seznamObiskovComponent,PlaniranjeObiskovComponent,NadomescanjeComponent
                ],
  providers:    [ UserService,PacientGuard,ZdravnikGuard,PatronaznaSluzbaGuard,GuestGuard,
                  PatronaznaSestraGuard,AdministratorGuard,SodelavecIZSGuard,UporabnikService,zdravstveniDelavecService,
				          DelovniNalogGuard,IzpisDNGuard,izpisDNService,DatePipe
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
