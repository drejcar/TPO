import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';


@Injectable()
export class UporabnikService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
 constructor(private http : Http){}
 
 save(zdravstveniDelavec: ZdravstveniDelavec,username: String, geslo: String) : Observable<Response>{
  var headers = new Headers();
  
	//TODO
	return this.http.post(`${this.baseUrl}/zdravstveniDelavec/`,JSON.stringify(zdravstveniDelavec), {headers: this.createAuthorizationHeader(headers,username,geslo)});
 }
 
 createAuthorizationHeader(headers:Headers,username:String,geslo:String){
	headers.append('Authorization', 'Basic ' + btoa(username+':'+geslo));
	return headers;
 }
}