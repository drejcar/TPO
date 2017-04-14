import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Uporabnikdrugi } from './Pacient';
import { Vloga } from './Pacient';

@Injectable()
export class UserService {
 
 
  private loggedIn = false;
  private baseUrl: String = 'localhost:8080/patronazneSestre/v1/';
  vlog = [{idvloga: 1}];
  result = [{email: "test", geslo: "neki",vloga:this.vlog }];
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('username');
	
  }

  login(username: String, pass: String): Uporabnikdrugi {
	  
	  
    let headers = new Headers();
	
	this.http.get(`${this.baseUrl}/uporabnik/login/${username}`, {headers: this.createAuthorizationHeader(headers,pass,username)}).toPromise().then(r => r.json()).then(r => this.result = r);
		
		
		localStorage.setItem('username', this.result[0].email);
		localStorage.setItem('password', this.result[0].geslo);
		
		this.loggedIn = true;
		
		return this.result;	
        
		
  }

  
	  
	  
	  
	  
 
  //funkcija za ustvarjanje avtorizacijski header
  createAuthorizationHeader(headers:Headers, pass: String, username: String){
	headers.append('Authorization', 'Basic' + btoa(username+':'+pass));
	return headers;
 }
 
 mapUporabnik(response: Response): Uporabnikdrugi{
  return this.toUporabnik(response.json());
}
//pretvorba json objekta v angular objekt
 toUporabnik(r:any): Uporabnikdrugi{
  let uporabnik = <Uporabnikdrugi>({
	 email: r.email,
	 geslo: r.geslo,
	 vloga: r.vloga,
  });
  console.log('Parsed person:', uporabnik);
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
