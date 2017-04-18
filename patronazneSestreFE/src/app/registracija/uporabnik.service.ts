import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Uporabnik } from '../uporabnik';
import { Pacient } from '../Pacient';
import { Posta } from '../Pacient';
import { Spol } from '../Pacient';
import { Uporabnikdrugi } from '../Pacient';
import { Vloga } from '../Pacient';
import { Okolis } from '../Pacient';
import { Router, CanActivate } from '@angular/router';
import { Spols } from './sifranti'


@Injectable()
export class UporabnikService{
 private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1';
 private headers = new Headers({'Content-Type': 'application/json'});
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
		idvloga: 7,
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
	
	return this.http.post(`${this.baseUrl}/registracija`,JSON.stringify(pacient), {headers: this.headers});
 }
 
 getPoste(): Observable<Posta[]>{
	 return this.http.get(`${this.baseUrl}/sifranti/posta`, {headers: this.headers}).map((res) => {return this.mapPosta(res)});
	 
 }
 getSpol(): Observable<Spols[]>{
	 return this.http.get(`${this.baseUrl}/sifranti/spol`, {headers: this.headers}).map((res) => {return this.mapSpol(res)});
	 
 }
 getOkolisByPosta(): Observable<Okolis[]>{
	 return this.http.get(`${this.baseUrl}/sifranti/okolisByPosta/`, {headers: this.headers}).map((res) => {return this.mapOkolis(res)});
	 
 }
 
  mapPosta(response: Response): Posta[]{
  return response.json().results.map(this.toPostas);
}
 mapSpol(response: Response): Spols[]{
  return response.json().results.map(this.toSpols);
}
 mapOkolis(response: Response): Okolis[]{
  return response.json().results.map(this.toOkoliss);
}
 toPostas(r:any): Posta{
	let posta = <Posta>({
		idposta: r.idposta,
		opis: r.opis,
		
	});
	return posta;
 }
 toSpols(r:any): Spols{
	 let spol = <Spols>({
		idspol: r.idspol,
		opis: r.opis,
	});
	return spol;
 }
 toOkoliss(r:any): Okolis{
	let okolis = <Okolis>({
	 idokolis: r.idokolis,
	 opis: r.opis,
	 idposta: r.idposta,
	});
	return okolis;
 }
}