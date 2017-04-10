/**
 * Created by Andrej on 9.4.2017.
 */

import { Component } from '@angular/core';
import { Uporabnik } from './uporabnik';
import { Router } from '@angular/router';

@Component({
  selector: 'registracija',
  templateUrl: './registracija.component.html'
})

export class RegistracijaFormComponent {
  constructor(
    private router:Router){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  spoli=['Moski','Zenski'];
  ime='';
  priimek='';
  mail='';
  pwd='';
  datumRojstva='';
  stKartice='';
  okolisi=['Ljubljana','Maribor','Koper','Kranj','Novo Mesto'];
  model=new Uporabnik(this.ime,this.priimek,this.mail,this.pwd,this.stKartice,this.okolisi[0],this.datumRojstva,this.spoli[0]);
  submitted=false;
  onSubmit(){this.submitted=true;}
  novUporabnik(){
    this.model=new Uporabnik(this.ime,this.priimek,this.mail,this.pwd,this.stKartice,this.okolisi[0],this.datumRojstva,this.spoli[0]);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
}

