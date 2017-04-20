import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';
import { Vloga } from '../ZdravstveniDelavec';
import { Okolis } from '../ZdravstveniDelavec';
import { IzvajalecZdravstvenihStoritev } from '../ZdravstveniDelavec';
import { UporabnikZd } from '../ZdravstveniDelavec';
@Injectable()
export class zdravstveniDelavecService{
 private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1';
 private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@admin:admin')});
 constructor(private http : Http){}
 
 save(zdravstveniDelavec: ZdravstveniDelavec,check: boolean): Observable<Response>{
	 let okoli = <Okolis>({
		idokolis: zdravstveniDelavec.okolis.idokolis,
	 });
	 if(check == false){
		 okoli = null;
	 }
	 let vlog = <Vloga>({
		idvloga: zdravstveniDelavec.uporabnik.vloga.idvloga, 
	 });
	 let uporabnik = <UporabnikZd>({
		email: zdravstveniDelavec.uporabnik.email,
		geslo: zdravstveniDelavec.uporabnik.geslo,
		vloga: vlog,
	 });
	 let izv = <IzvajalecZdravstvenihStoritev>({
		idizvajalecZdravstvenihStoritev: zdravstveniDelavec.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev,
		
	 });
	 let zdr = <ZdravstveniDelavec>({
		ime: zdravstveniDelavec.ime,
		priimek: zdravstveniDelavec.priimek,
		sifra: zdravstveniDelavec.sifra,
		telefonskaStevilka: zdravstveniDelavec.telefonskaStevilka,
		uporabnik: uporabnik,
		izvajalecZdravstvenihStoritev: izv,
		okolis: okoli,
	 });
	 
	 this.headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@admin:admin')});
	 
  return this.http.post(`${this.baseUrl}/zdravstveniDelavec`,JSON.stringify(zdr), {headers: this.headers});
 }
 getVloge(): Observable<Vloga[]> {
	 this.headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@admin:admin')});
	 return this.http.get(`${this.baseUrl}/sifranti/vloga`, {headers: this.headers}).map((response: Response) => response.json());
 }
 getIzvajalecZdravstvenihStoritev(): Observable<IzvajalecZdravstvenihStoritev[]>{
	 return this.http.get(`${this.baseUrl}/izvajalecZdravstvenihStoritev/`, {headers: this.headers}).map((response: Response) => response.json());
 }
 
 getOkolisByPosta(post: number): Observable<Okolis[]>{
	 this.headers = new Headers({'Content-Type': 'application/json'});
	 return this.http.get(`${this.baseUrl}/registracija/okolisByPosta/${post}`, {headers: this.headers}).map((response: Response) => response.json());
 }
}