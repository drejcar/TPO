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
	var devided = upr.postnaStevilka.split(' ');
	
	let spol = <Spol>({
		idspol: sp,
		opis: upr.spol,
	});
	
	
	let posta = <Posta>({
		idposta: Number(devided[0]),
		opis: devided[1],
		
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
	 return this.http.get(`${this.baseUrl}/registracija/posta`, {headers: this.headers}).map((response: Response) => response.json());
	 
 }
 getSpol(): Observable<Spol[]>{
	 return this.http.get(`${this.baseUrl}/registracija/spol`, {headers: this.headers}).map((response: Response) => response.json());
	 
 }
 getOkolisByPosta(post: number): Observable<Okolis[]>{
	 return this.http.get(`${this.baseUrl}/registracija/okolisByPosta/${post}`, {headers: this.headers}).map((response: Response) => response.json());
	 
 }
 
}