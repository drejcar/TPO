import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Uporabnik } from '../uporabnik';
import { Pacient } from '../Pacient';
import { Posta } from '../Pacient';
import { Spol } from '../Pacient';
import { Uporabnikdrugi } from '../Pacient';
import { Vloga } from '../Pacient';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1/';
 private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('guest@guest:guest')});
 constructor(private http : Http){}
 
 save(upr: Uporabnik) : Observable<Response>{
	var sp = 1;
	if(upr.spol == 'Moski'){
		sp = 1;
	}else{
		sp = 2;
	}
	//spol TODO se id za spol
	let spol = <Spol>({
		idspol: sp,
		opis: upr.spol,
	});
	//TODO dokoncat posto
	let posta = <Posta>({
		idposta: upr.postnaStevilka,
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
		telefonskaStevilka: upr.tel,
		ulica: upr.ulica,
		posta: posta,
		spol: spol,
		hisnaStevilka: upr.hisnaStevilka,
		uporabnik: uporabnikDrugi,
	});
	
	return this.http.post(`${this.baseUrl}pacient/`,JSON.stringify(pacient), {headers: this.headers});
 }
 
 createAuthorizationHeader(headers:Headers){
	headers.append('Authorization', 'Basic' + btoa('guest@guest:guest'));
	return headers;
 }
}