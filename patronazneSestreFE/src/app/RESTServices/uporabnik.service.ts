import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Uporabnik } from '../uporabnik';
import { Pacient } from '../Pacient';
import { Posta } from '../Pacient';
import { Spol } from '../Pacient';
import { Uporabnikdrugi } from '../Pacient';
import { Vloga } from '../Pacient';

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
 constructor(private http : Http){}
 
 save(upr: Uporabnik) : Observable<Response>{
  var headers = new Headers();
	
	//spol TODO se id za spol
	let spol = <Spol>({
		opis: upr.spol,
	});
	//TODO dokoncat posto
	let posta = <Posta>({
		opis: upr.okolis,
	});
	//vloga
	let vloga = <Vloga>({
		idvloga: 2,
	});
	//uporabnik nov
	let uporabnikDrugi = <Uporabnikdrugi>({
		email: upr.mail,
		geslo: upr.pwd,
		vloga: vloga
	});
	
	//filamo json pacient
	let pacient = <Pacient>({
		ime: upr.ime,
		priimek: upr.priimek,
		stevilkaZdravstvenegaZavarovanja: upr.stKartice,
		posta: posta,
		spol: spol,
		uporabnik: uporabnikDrugi,
	});
	
	return this.http.post(`${this.baseUrl}/Pacient/`,JSON.stringify(pacient), {headers: this.createAuthorizationHeader(headers)});
 }
 
 createAuthorizationHeader(headers:Headers){
	headers.append('Authorization', 'Basic' + btoa('username:password'));
	return headers;
 }
}