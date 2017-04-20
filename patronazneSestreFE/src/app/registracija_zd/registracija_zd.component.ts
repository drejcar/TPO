import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { FormsModule, NgForm } from '@angular/forms';
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
	ifpatronaz: boolean = false;
	novBool: boolean = false;
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
  vloge: Vloga[] = [{idvloga:1,opis:''}];
  okolisi: Okolis[] = [{idokolis:1,opis:'',posta:this.post[0]}];
  izvajaleciZdravstvenihStoritev: IzvajalecZdravstvenihStoritev[] = [{idizvajalecZdravstvenihStoritev:1,posta:this.post[0],ulica: '',hisnaStevilka:'',stevilkaIzvajalca:'',naziv:''}];
  pwd2='';
  
  model3 = new Object(this.pwd2);
  model2 = new UporabnikZd(this.email,this.geslo,this.vloge[0])
  model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifra,this.telefonskaStevilka,this.model2,this.izvajaleciZdravstvenihStoritev[0],this.okolisi[0]);
  
  submitted=false;
  onSubmit(form: NgForm){
	  this.novBool = false;
	  
	  var devided2 = form.value.vloga.split(' ');
	  let vlog = <Vloga>({
		  idvloga: Number(devided2[1]),
	  });
	 
	  
	  var devided = form.value.izvajalecZdravstvenihStoritev.split(' ');
	  let izvr = <IzvajalecZdravstvenihStoritev>({
		 idizvajalecZdravstvenihStoritev: Number(devided[1]),
	  });
	  let okol = <Okolis>({
		  idokolis: Number(this.okolisi[0].idokolis),
	  });
	  
	  
	  this.model2.vloga = vlog;
	  this.model.okolis = okol;
	  this.model.izvajalecZdravstvenihStoritev = izvr;
	  this.model.uporabnik = this.model2;
	  this.zdravstveniDelavecService.save(this.model,this.ifpatronaz).subscribe((r: Response) => {console.log('success');this.submitted=true;},
	  
	  err => {this.novBool = true;});
	  
  }
  novZdravstveniDelavec(){
	 this.model=new ZdravstveniDelavec(this.ime,this.priimek,this.sifra,this.telefonskaStevilka,this.model2,this.izvajaleciZdravstvenihStoritev[0],this.okolisi[0]);
  }
  novUporabnikZd(){
	  this.model2 = new UporabnikZd(this.email,this.geslo,this.vloge[0]);
  }
  ngOnInit(){
	  //za pridobit vloge
	  this.zdravstveniDelavecService.getVloge().subscribe(data => {this.vlogas = data;
		let i = 0;  
		for(let entry of this.vlogas){
			
			if(Number(entry.idvloga) == 3 || Number(entry.idvloga) == 4 || Number(entry.idvloga) == 5 || Number(entry.idvloga) == 6){
				
				this.vloge[i] = entry;
				i = i+1;
			}
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

	  },
	  err => {console.log(err);});
	  
  }
  onChangeVloga(sprememba: String){
	  var devide = sprememba.split(' ');
	  if(devide[0] == 'PatronaznaSestra'){
		  this.ifpatronaz = true;
	  }else{
		  this.ifpatronaz = false;
	  }
	  
  }
  onChangePostnaStevilka(sprememba: String){
	  console.log(sprememba);
	  var devided = sprememba.split(' ');
	 this.zdravstveniDelavecService.getOkolisByPosta(Number(devided[0])).subscribe(data => {this.okoliss = data;
	 let i = 0;
	 for(let entry of this.okoliss){
		 this.okolisi[i] = entry;
		 i = i+1;
	 }
	 });
  }
}
