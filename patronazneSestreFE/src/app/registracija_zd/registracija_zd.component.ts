import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';
import { UporabnikZd } from '../ZdravstveniDelavec';
import { Vloga } from '../ZdravstveniDelavec';

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
  idvloga=3;
  tel='';

  model3 = new Vloga(this.idvloga);
  model2 = new UporabnikZd(this.mail,this.pwd,this.model3);
  model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifraZd,this.tel,this.model2);
  submitted=false;
  onSubmit(){this.submitted=true;}
  novVloga(){
	  this.model3 = new Vloga(this.idvloga);
  }
  novUporab(){
	  this.model2 = new UporabnikZd(this.mail,this.pwd,this.model3);
  }
  novZd(){
	this.model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifraZd,this.tel,this.model2);
  }
  //ne potrebujes
  get diagnostic() { return JSON.stringify(this.model); }
}
