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

const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'registracija', component: RegistracijaFormComponent },
  { path: 'delovniNalog', component: DelovniNalogComponent,canActivate:[ZdravnikGuard,PatronaznaSluzbaGuard]},
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
