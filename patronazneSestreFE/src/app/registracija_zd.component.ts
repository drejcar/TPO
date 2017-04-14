import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZdravstveniDelavec } from './ZdravstveniDelavec';

@Component({
  selector: 'registracija_zd',
  templateUrl: './registracija_zd.component.html',
  styleUrls: [ './registracija_zd.component.css' ]
})


export class Registracija_zdComponent {
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
  
  model=new ZdravstveniDelavec(this.ime,this.priimek,this.mail,this.pwd,this.sifraZd);
  submitted=false;
  onSubmit(){this.submitted=true;}
  novZd(){
	this.model=new ZdravstveniDelavec(this.ime,this.priimek,this.mail,this.pwd,this.sifraZd);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
}