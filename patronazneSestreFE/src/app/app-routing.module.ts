import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PrijavaComponent }      from './prijava/prijava.component';
import { RegistracijaFormComponent } from './registracija/registracija.component';
import { DelovniNalogComponent } from './delovniNalog/delovniNalog.component';
import { PageNotFoundComponent } from './not-found.component';

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

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'registracija', component: RegistracijaFormComponent },
  { path: 'delovniNalog', component: DelovniNalogComponent/**,canActivate:[ZdravnikGuard,PatronaznaSluzbaGuard]*/},
  { path: 'registracijazd', component: Registracija_zdComponent },
  { path: 'spremembaGesla',component: SpremembaGeslaComponent },
  { path: 'Administrator',component: AdminDashComponent, canActivate: [AdministratorGuard] },
  { path: 'Pacient', component: PacientDashComponent, canActivate: [PacientGuard] },
  { path: 'PatronaznaSestra', component: PatronaznaSestraDashComponent, canActivate: [PatronaznaSestraGuard] },
  { path: 'PatronaznaSluzba', component: PatronaznaSluzbaDashComponent, canActivate: [PatronaznaSluzbaGuard] },
  { path: 'SodelavecIZS', component: SodelavecIzsDashComponent, canActivate: [SodelavecIZSGuard] },
  { path: 'Zdravnik', component: ZdravnikDashComponent, canActivate: [ZdravnikGuard] },
  { path: 'aktivacija/:id',component: AktivacijaComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
