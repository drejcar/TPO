import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard.component';
import { PrijavaComponent }      from './prijava.component';
import { RegistracijaFormComponent } from './registracija.component';
import { DelovniNalogComponent } from './delovniNalog.component';

import {PacientGuard} from "./guard/pacient.guard";
import {ZdravnikGuard} from "./guard/zdravnik.guard";
import {PatronaznaSluzbaGuard} from "./guard/patronaznasluzba.guard";
import {PatronaznaSestraGuard} from "./guard/patronaznasestra.guard";
import {AdministratorGuard} from "./guard/administrator.guard";
import {SodelavecIZSGuard} from "./guard/sodelavecizs.guard";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'registracija', component: RegistracijaFormComponent },
  { path: 'delovniNalog', component: DelovniNalogComponent,canActivate:[ZdravnikGuard,PatronaznaSluzbaGuard],},
  { path: '**',redirectTo:'/dashboard',pathMatch:'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
