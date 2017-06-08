import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {Router,ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Upr, Vlog } from "../prijava/upr"
import { Location } from '@angular/common';

@Component({
  selector: 'pozabilGeslo',
  templateUrl: './sprememba-gesla2.component.html'
})

export class pozabilGesloComponent implements OnInit{
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
  constructor(private router:Router,private http: Http,private route: ActivatedRoute,private location: Location){}

  res: any;
  pwd:String='';
  pwd2:String='';
  mail:String = '';
  password:String = '';
  vloga:String = '';
  datumZadnjePrijave:String = '';
  iduporabnika:number = 0;
  idvloga: number = 0;


  model = ({'pwd': this.pwd, 'pwd2': this.pwd2});
  submitted=false;
  fail= false;
  onSubmit(){

	var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	var baseUrl: String = 'http://localhost:8080/patronazneSestre/v1/uporabnik';
    let vlog = <Vlog>({
		idvloga: this.idvloga,
		opis: this.vloga,
	});
	let upr = <Upr>({
		iduporabnik: this.iduporabnika,
		email: this.mail,
		geslo: this.model.pwd,
		vloga: vlog,
		zadnjaPrijava: this.datumZadnjePrijave,
	});
	console.log(upr);

	this.http.put(`${baseUrl}`,JSON.stringify(upr),{headers: headers}).subscribe(res =>{
		this.submitted = true;
	},
	err => {this.fail = true;});

  }
  ngOnInit(){
	var headers = new Headers({'Content-Type': 'application/json'});
	setTimeout(() => {
	this.route.params
    .switchMap((params: Params) =>this.http.get(`${this.restUrl}/uporabnik/getUporabnik/${Number(+params['id'])}`, {headers: headers})).map((response: Response) => response.json()).subscribe(res => {this.res = res;
	var vmesna = JSON.stringify(this.res);
	var dobiUporabnika = JSON.parse(vmesna);
	console.log(dobiUporabnika);
	this.iduporabnika = dobiUporabnika.iduporabnik;
	this.mail = dobiUporabnika.email;
	this.password = dobiUporabnika.geslo;
	this.datumZadnjePrijave = dobiUporabnika.zadnjaPrijava;
	this.idvloga = dobiUporabnika.vloga.idvloga;
	this.vloga = dobiUporabnika.vloga.opis;
	});
	},1000);
  }
}
