import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';
import { UporabnikZd } from '../ZdravstveniDelavec';
import { Vloga } from '../ZdravstveniDelavec';
import { Okolis } from '../ZdravstveniDelavec';
import { IzvajalecZdravstvenihStoritev } from '../ZdravstveniDelavec';
import { zdravstveniDelavecService } from './zdravstveniDelavec.service';
import { Posta } from '../ZdravstveniDelavec';

@Component({
  selector: 'registracija_zd',
  templateUrl: './registracija_zd.component.html',
  styleUrls: [ './registracija_zd.component.css' ]
})


export class Registracija_zdComponent implements OnInit {
	vlogas: Vloga[];
	izvajalci: IzvajalecZdravstvenihStoritev[];
	okoliss: Okolis[];
  constructor(
    private router:Router,private zdravstveniDelavecService: zdravstveniDelavecService){}
  gotoRegistracija(): void {
    this.router.navigate(['/registracija_zd']);
  }

  post: Posta[] = [{idposta:1,opis:''}];
  ime='';
  priimek='';
  email='';
  geslo='';
  sifra='';
  telefonskaStevilka='';
  vloga: Vloga[] = [{idvloga:1,opis:''}];
  okolisi: Okolis[] = [{idokolis:1,opis:'',posta:this.post[0]}];
  izvajaleciZdravstvenihStoritev: IzvajalecZdravstvenihStoritev[] = [{idizvajalecZdravstvenihStoritev:1,posta:this.post[0],ulica: '',hisnaStevilka:'',stevilkaIzvajalca:'',naziv:''}];
  
  
  
  model2 = new UporabnikZd(this.email,this.geslo,this.vloga[0])
  model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifra,this.telefonskaStevilka,this.model2,this.okolisi[0],this.izvajaleciZdravstvenihStoritev[0]);
  
  submitted=false;
  onSubmit(){
	  this.submitted=true;
	  this.model.okolis = this.okolisi[0];
	  this.zdravstveniDelavecService.save(this.model).subscribe((r: Response) => {console.log('success');});
	  
  }
  novZdravstveniDelavec(){
	 this.model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifra,this.telefonskaStevilka,this.model2,this.okolisi[0],this.izvajaleciZdravstvenihStoritev[0]);
  }
  novUporabnikZd(){
	  this.model2 = new UporabnikZd(this.email,this.geslo,this.vloga[0]);
  }
  ngOnInit(){
	  //za pridobit vloge
	  this.zdravstveniDelavecService.getVloge().subscribe(data => {this.vlogas = data;
		let i = 0;  
		for(let entry of this.vlogas){
			this.vloga[i] = entry;
			i = i+1;
		}  
	  },
	  err => {console.log(err);});
	  //za pridobit izvajalce
	  this.zdravstveniDelavecService.getIzvajalecZdravstvenihStoritev().subscribe(data => {this.izvajalci = data;
		let i = 0;  
		for(let entry of this.izvajalci){
			this.izvajaleciZdravstvenihStoritev[i] = entry;
			i = i+1;
		}  
		this.onChangePostnaStevilka(this.izvajaleciZdravstvenihStoritev[0]);
	  },
	  err => {console.log(err);});
	  
  }
  onChangePostnaStevilka(sprememba: any){
	  console.log(sprememba.posta.idposta);
	 this.zdravstveniDelavecService.getOkolisByPosta(sprememba.posta.idposta).subscribe(data => {this.okoliss = data;
	 let i = 0;
	 for(let entry of this.okoliss){
		 this.okolisi[i] = entry;
		 i = i+1;
	 }
	 });
  }
}
