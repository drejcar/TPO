/**
 * Created by Andrej on 7.4.2017.
<<<<<<< HEAD
=======
 * Kva se pa vn mečeš no :D On 10.4.2017
 * pobriš če tole vidš, to ide zgenerira
>>>>>>> 15b3eaa35d9a762208ea49e6c8f5ffa8262a70e6
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { PrijavaComponent }      from './prijava.component';
import { RegistracijaFormComponent } from './registracija.component';
import { DelovniNalogComponent } from './delovniNalog.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },  
  { path: 'prijava', component: PrijavaComponent }, 
  { path: 'registracija', component: RegistracijaFormComponent }, 
  { path: 'delovniNalog', component: DelovniNalogComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
