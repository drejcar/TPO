/**
 * Created by Andrej on 7.4.2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { PrijavaComponent }      from './prijava.component';
import { RegistracijaFormComponent } from './registracija.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'prijava', component: PrijavaComponent },
  { path: 'registracija',     component: RegistracijaFormComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
