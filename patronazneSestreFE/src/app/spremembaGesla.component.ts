import { Component } from '@angular/core';
import { ZdravstveniDelavec } from './ZdravstveniDelavec';
import { UporabnikZd } from './ZdravstveniDelavec';
import { Vloga } from './ZdravstveniDelavec';
import { FormsModule } from '@angular/forms'
import {UporabnikService} from "./registracija/uporabnik.service";
import {Router} from "@angular/router";
import { Upr, Vlog } from "./prijava/upr"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'spremembaGesla',
  templateUrl: './sprememba-gesla.component.html'
})

export class SpremembaGeslaComponent{
  constructor(
    private router:Router, private uporabnikService: UporabnikService,private http: Http){}

  pwd:String='';
  pwd2:String='';
  model = ({'pwd': this.pwd, 'pwd2': this.pwd2});
  submitted=false;
  fail= false;
  onSubmit(){
	  this.fail = false;
	var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@admin:admin')});
	var baseUrl: String = 'http://localhost:8080/patronazneSestre/v1/uporabnik';
    let vlog = <Vlog>({
		idvloga: Number(localStorage.getItem('idvloga')),
		opis: localStorage.getItem('vloga'),
	});
	let upr = <Upr>({
		iduporabnik: Number(localStorage.getItem('iduporabnik')),
		email: localStorage.getItem('email'),
		geslo: this.model.pwd,
		vloga: vlog,
		zadnjaPrijava: localStorage.getItem('datumZadnjePrijave'),
	});
	console.log(upr);
	
	this.http.put(`${baseUrl}`,JSON.stringify(upr),{headers: headers}).subscribe(res =>{
		this.submitted = true;
	},
	err => {this.fail = true;});
  
  }
  }
