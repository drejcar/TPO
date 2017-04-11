import { Component } from '@angular/core';
import { Uporabnik } from './uporabnik';
import { Router } from '@angular/router';

@Component({
  selector: 'registracija_zd',
  templateUrl: './registracija_zd.component.html',
  styleUrls: [ './registracija_zd.component.css' ]
})

export class RegistracijaFormComponent {
  constructor(
    private router:Router){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija_zd']);
  }
  
  ime='';
  priimek='';
  mail='';
  pwd='';
  sifraZd='';
}