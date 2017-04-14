import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ZdravstveniDelavec } from '../ZdravstveniDelavec';


@Injectable()
export class UporabnikService{
 private baseUrl: String = 'localhost:8080/patronazneSestre/v1';
 
 constructor(private http : Http){}
 
 save(zdravstveniDelavec: ZdravstveniDelavec,username: String, geslo: String){
	 
  var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(username+':'+geslo)});
  
	//TODO
	this.http.post(`${this.baseUrl}/zdravstveniDelavec/`,JSON.stringify(zdravstveniDelavec), {headers: headers});
 }
 
}