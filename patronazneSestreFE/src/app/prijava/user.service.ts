import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Uporabnikdrugi } from '../Pacient';
import { Vloga } from '../Pacient';
import { Prijava } from './prijava';
import { Observable } from 'rxjs/Rx';
import { Upr } from "./upr"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {
 
 private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('guest@guest:guest')});
  private loggedIn = false;
  private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1';
  upr: Upr;
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('username');
	
  }

  login(prijava:Prijava): Observable<Upr> {
		
		return this.http.get(`${this.baseUrl}/uporabnik/login/${prijava.mail}`, {headers: this.headers}).map((res) => {return this.mapUporabnik(res)});
		
		//localStorage.setItem('username', this.result.email);
		//localStorage.setItem('password', this.result.geslo);
		
  }

  
	  
	  
	  
	  
 
  //funkcija za ustvarjanje avtorizacijski header
  createAuthorizationHeader(headers:Headers, pass: String, username: String){
	headers.append('Authorization', 'Basic' + btoa(username+':'+pass));
	return headers;
 }
 
 mapUporabnik(response: Response): Upr{
  return this.toUporabnik(response.json());
}
//pretvorba json objekta v angular objekt
 toUporabnik(r:any): Upr{
  let vlog = <Vloga>({
	 idVloga: r.vloga.idvloga; 
	 opis: r.vloga.opis	
  });
  let uporabnik = <Upr>({ 	 
	 email: r.email,
	 geslo: r.geslo,
	 vloga: r.vloga,
  });
  
  return uporabnik;
 }  
  logout() {
    
	localStorage.removeItem('username');
	localStorage.removeItem('password');
	localStorage.removeItem('vloga');
    this.loggedIn = false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
