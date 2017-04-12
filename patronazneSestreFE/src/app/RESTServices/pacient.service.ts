import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Uporabnik } from '../uporabnik';
import { Pacient } from '../Pacient';
import { Posta } from '../Pacient';
import { Spol } from '../Pacient';
import { Uporabnikdrugi } from '../Pacient';
import { Vloga } from '../Pacient';

//klasa za service
@Injectable()
export class PacientService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
 constructor(private http : Http){}
 
 //service za prejemanje pacienta
 get(zz: number,username: String, pass: String): Observable<Pacient> {
	
	var headers = new Headers();
	let pacient$ = this.http.get(`${this.baseUrl}/pacient/zz/${zz}`, {headers: this.createAuthorizationHeader(headers,pass,username)}).map(this.mapPacient);
	
	return pacient$
	
 }
 //funkcija za ustvarjanje avtorizacijski header
  createAuthorizationHeader(headers:Headers, pass: String,username: String){
	headers.append('Authorization', 'Basic' + btoa(username+':'+pass));
	return headers;
 }
 //vmesna funkcija
 mapPacient(response: Response): Pacient{
  return this.toPacient(response.json());
}
//pretvorba json objekta v angular objekt
 toPacient(r:any): Pacient{
  let pacient = <Pacient>({
    hisnaStevilka: r.hisnaStevilka,
    ime: r.ime,
    priimek: r.priimek,
    stevilkaZdravstvenegaZavarovanja: r.stevilkaZdravstvenegaZavarovanja,
	telefonskaStevilka: r.telefonskaStevilka,
	ulica: r.ulica,
	posta: r.posta,
	spol: r.spol,
	uporabnik: r.uporabnik,
  });
  console.log('Parsed person:', pacient);
  return pacient;
}

}