import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { delovniNalog, IzvajalecZdravstvenihStoritev, ZdravstveniDelavec, Pacient, Material, Zdravilo, Bolezen, Storitev} from './delovniNalog';

@Injectable()
export class izpisDNService{
	private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	private baseUrl: String = 'http://localhost:8080/patronazneSestre/v1';
	constructor(private http: Http){}
	
	getDelovneNaloge(idZD: number) : Observable<any> {
		console.log(idZD);
		
		
		var date = new Date();
		var datum=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+(date.getDate());
		console.log(datum);
		return this.http.get(`${this.baseUrl}/delovniNalog/zdravstveniDelavecId/${idZD}?od=2017-1-1&do=${datum}&start=0&size=10`, {headers: this.headers}).map((response: Response) => response.json());
	}
}