import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { DelovniNalog } from '/../delovniNalog';
import { Uporabnik } from '../uporabnik';

@Injectable()
export class UporabnikService{
 private baseUrl: String = 'rogla.fri1.uni-lj.si/rest/patronazneSestre/v1/';
 constructor(private http : Http){}

 /*
 save(delovniNalog: DelovniNalog,uporabnik: Uporabnik) : Observable<Response>{
  var headers = new Headers();
	//TODO
	return this.http.post(`${this.baseUrl}/delovniNalog/`,JSON.stringify(DelovniNalog), {headers: this.createAuthorizationHeader(headers,uporabnik)});
 }

 createAuthorizationHeader(headers:Headers,uporabnik:Uporabnik){
	headers.append('Authorization', 'Basic' +btoa(uporabnik.mail+':'+uporabnik.pwd));
	return headers;
 }*/
}
