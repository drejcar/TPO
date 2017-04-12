import { Component } from '@angular/core';
import { Uporabnik } from './uporabnik';
import { Router } from '@angular/router';
import { ZdravstveniDelavec } from './ZdravstveniDelavec.js';

@Component({
  selector: 'registracija_zd',
  templateUrl: './registracija_zd.component.html',
  styleUrls: [ './registracija_zd.component.css' ]
})

export class Registracija_zdFormComponent {
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
  model=new Uporabnik(this.ime,this.priimek,this.mail,this.pwd);
  model2=new ZdravstveniDelavec(this.ime,this.priimek,this.email,this.pwd,this.sifraZd);
  submitted=false;
  onSubmit(){this.submitted=true;}
  novUporabnik(){
    this.model=new Uporabnik(this.ime,this.priimek,this.mail,this.pwd,this.stKartice,this.okolisi[0],this.datumRojstva,this.spoli[0]);
  }
  novZd(){
	this.model2=new ZdravstveniDelavec(this.ime,this.priimek,this.mail,this.pwd,this.sifraZd);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
}