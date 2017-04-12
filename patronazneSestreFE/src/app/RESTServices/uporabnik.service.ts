import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Uporabnik } from 'C:/git/tpoProjekt/patronazneSestreFE/src/app/uporabnik';
import { Prijava } from 'C:/git/tpoProjekt/patronazneSestreFE/src/app/prijava';

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
 constructor(private http : Http){}
 
 save(uporabnik: Uporabnik,login: Prijava) : Observable<Response>{
  var headers = new Headers();
	login.mail = uporabnik.mail;
	login.pwd = uporabnik.pwd;
	return this.http.post(`${this.baseUrl}/Uporabnik/`,JSON.stringify(login), {headers: this.createAuthorizationHeader(headers)});
 }
 
 createAuthorizationHeader(headers:Headers){
	headers.append('Authorization', 'Basic' + btoa('username:password'));
	return headers;
 }
}