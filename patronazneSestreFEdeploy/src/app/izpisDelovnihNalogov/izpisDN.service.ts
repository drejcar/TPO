import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { delovniNalog, IzvajalecZdravstvenihStoritev, ZdravstveniDelavec, Pacient, Material, Zdravilo, Bolezen, Storitev} from './delovniNalog';

@Injectable()
export class izpisDNService{
	private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	private baseUrl: String = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private http: Http){}

	getDelovneNaloge(idZD: number) : Observable<any> {



		var date = new Date();
		var datum=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+(date.getDate());

		return this.http.get(`${this.baseUrl}/delovniNalog/zdravstveniDelavecId/${idZD}?od=2017-1-1&do=${datum}&start=0&size=10`, {headers: this.headers}).map((response: Response) => response.json());
	}
	getDelovniNalog(idDN:number): Observable<any> {

		return this.http.get(`${this.baseUrl}/delovniNalog/${idDN}`,{headers: this.headers}).map((response: Response) => response.json());
	}
	getDelovneNalogePrekIzv(izvId:number): Observable<any> {
		console.log(izvId);

		return this.http.get(`${this.baseUrl}/delovniNalog/izvajalecZdr/${izvId}?start=0&size=10`,{headers: this.headers}).map((response: Response) => response.json());
	}
	getDelovneNalogePrekIzv2(izvId:number,start:number): Observable<any> {
		console.log(izvId);
		console.log(start);
		return this.http.get(`${this.baseUrl}/delovniNalog/izvajalecZdr/${izvId}?start=${start}&size=10`,{headers: this.headers}).map((response: Response) => response.json());
	}
}
