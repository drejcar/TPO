import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ZdravstveniDelavec } from 'C:/git/tpoProjekt/patronazneSestreFE/src/app/ZdravstveniDelavec';
import { Uporabnik } from 'C:/git/tpoProjekt/patronazneSestreFE/src/app/uporabnik';

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
 constructor(private http : Http){}
 
 save(zdravstveniDelavec: ZdravstveniDelavec,uporabnik: Uporabnik) : Observable<Response>{
  var headers = new Headers();
	//TODO
	return this.http.post(`${this.baseUrl}/zdravstveniDelavec/`,JSON.stringify(zdravstveniDelavec), {headers: this.createAuthorizationHeader(headers,uporabnik)});
 }
 
 createAuthorizationHeader(headers:Headers,uporabnik:Uporabnik){
	headers.append('Authorization', 'Basic ' + btoa(uporabnik.mail+':'+uporabnik.pwd));
	return headers;
 }
}