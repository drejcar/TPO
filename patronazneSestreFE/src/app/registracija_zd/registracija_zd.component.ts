import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';
import { UporabnikZd } from '../ZdravstveniDelavec';
import { Vloga } from '../ZdravstveniDelavec';
import { Okolis } from '../ZdravstveniDelavec';
import { IzvajalecZdravstvenihStoritev } from '../ZdravstveniDelavec';

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
  tel='';
  okolisi=['Ljubljana','Maribor','Koper','Kranj','Novo Mesto'];
  
  
  
  
  //model2 = new UporabnikZd(this.mail,this.pwd,this.model3);
  //model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifraZd,this.tel);
  
  submitted=false;
  onSubmit(vlog: String, izvajalecZdravstvenihStoritev:String){
	  
	  
	  
  }
  //ne potrebujes
  
}
