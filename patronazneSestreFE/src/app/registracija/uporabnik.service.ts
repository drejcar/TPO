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
import { Kontakt } from "./kontakt";
import { sorodstvenoRazmerje } from "./kontakt";
import { Kontakts } from "../Pacient";

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1';
 private headers = new Headers({'Content-Type': 'application/json'});
 constructor(private http : Http){}

 save(upr: Uporabnik,dodaj: boolean,kontaktnov: Kontakt) : Observable<Response>{
	var sp = 1;
	if(upr.spol == 'Moški'){
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
	console.log(dodaj+"\n");


		var devided2 = kontaktnov.kpostnaStevilka.split(' ');
		let posta2 = <Posta>({
			idposta: Number(devided2[0]),
			opis: devided2[1],
		});

		let kontakt = <Kontakts> ({
			ime: kontaktnov.kime,
			priimek: kontaktnov.kpriimek,
			telefonskaStevilka: kontaktnov.ktel,
			ulica: kontaktnov.kulica,
			hisnaStevilka: kontaktnov.khisnaStevilka,
			posta: posta2,
			sorodstvenoRazmerje: kontaktnov.krazmerje,
		});
	if(dodaj == false){

		kontakt = null;
	}

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
		okolis: upr.okolis,
		datumRojstva: upr.datumRojstva,
		kontakt: kontakt,
	});

	return this.http.post(`${this.baseUrl}/registracija`,JSON.stringify(pacient), {headers: this.headers});
 }
 update(upr:any,dodaj:boolean,kontaktnov: Kontakt): Observable<Response>{


	var devided = upr.posta.split(' ');
	let posta = <Posta>({
		idposta: Number(devided[0]),
		opis: devided[1],
	});
	upr.posta = posta;
	let kontakt: Kontakts = null;
	console.log(dodaj);
	if(dodaj == true){
	var devided3 = kontaktnov.kpostnaStevilka.split(' ');
		let posta2 = <Posta>({
			idposta: Number(devided3[0]),
			opis: devided3[1],
		});
		console.log(kontaktnov.krazmerje);
		kontakt = <Kontakts> ({
			ime: kontaktnov.kime,
			priimek: kontaktnov.kpriimek,
			telefonskaStevilka: kontaktnov.ktel,
			ulica: kontaktnov.kulica,
			hisnaStevilka: kontaktnov.khisnaStevilka,
			posta: posta2,
			sorodstvenoRazmerje: kontaktnov.krazmerje,
		});

	}
	console.log(kontakt);
	if(dodaj == true){
		upr.kontakt = kontakt;
	}
	console.log(upr);
	console.log(JSON.stringify(upr));

	var headers2 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	return this.http.put(`${this.baseUrl}/pacient`,JSON.stringify(upr), {headers: headers2});

 }
 
 pobrisi(upr:any): Observable<Response> {
	console.log(upr);
	
	upr.pacient = null;
	
	var headers2 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	return this.http.put(`${this.baseUrl}/pacient`,JSON.stringify(upr), {headers: headers2});
 }
 getPoste(): Observable<Posta[]>{
	 return this.http.get(`${this.baseUrl}/registracija/posta`, {headers: this.headers}).map((response: Response) => response.json());

 }
 getSpol(): Observable<Spol[]>{
	 return this.http.get(`${this.baseUrl}/registracija/spol`, {headers: this.headers}).map((response: Response) => response.json());

 }

 getRazmerje(): Observable<sorodstvenoRazmerje[]>{
   return this.http.get(`${this.baseUrl}/registracija/sorodstvenoRazmerje`, {headers: this.headers}).map((response: Response) => response.json());

 }

 getOkolisByPosta(post: number): Observable<Okolis[]>{
	 return this.http.get(`${this.baseUrl}/registracija/okolisByPosta/${post}`, {headers: this.headers}).map((response: Response) => response.json());

 }

 aktivirajRacun(id: number): Observable<Response>{

	 return this.http.get(`${this.baseUrl}/registracija/${id}`,{headers: this.headers});

 }
}
