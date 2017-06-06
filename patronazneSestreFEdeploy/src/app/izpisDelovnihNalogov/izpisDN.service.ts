import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { delovniNalog, IzvajalecZdravstvenihStoritev, ZdravstveniDelavec, Pacient, Material, Zdravilo, Bolezen, Storitev} from './delovniNalog';
class Obisk{
	idobisk:number;
	datumObiska:String;
	fixenDatum:number;
	delovniNalog:delovniNalog;
	opravljen:number;
	dejanskiDatumObiska:number;
}

@Injectable()
export class izpisDNService{
	private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	private baseUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private http: Http){}

	getObisk(idObiska:number): Observable<any> {
		return this.http.get(`${this.baseUrl}/obiski/${idObiska}`,{headers: this.headers}).map((response: Response) => response.json());
	}
	posodobiObisk(obisk:any): Observable<any>{
		return this.http.put(`${this.baseUrl}/delovniNalog/obisk`,JSON.stringify(obisk),{headers:this.headers});
	}
	getDelovneNaloge(idZD: number,idStart:number) : Observable<any> {

		var date = new Date();
		var datum=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+(date.getDate());

		return this.http.get(`${this.baseUrl}/delovniNalog/zdravstveniDelavecId/${idZD}?od=2017-1-1&do=${datum}&start=${idStart}&size=10`, {headers: this.headers}).map((response: Response) => response.json());
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


	updateDatum(obi: any,delovniNalog:any): Observable<any> {
		var fixen = 0;
		if(obi.fiksniDatum == 'NE'){
			fixen = 1;
		}
		var opravljen = 0;
		console.log(delovniNalog);
		let obisk = <Obisk>({
			idobisk: obi.idObiska,
			datumObiska: obi.predvideniDatumObiska,
			fixenDatum: fixen,
			delovniNalog: delovniNalog,
			opravljen:	opravljen,
			dejanskiDatumObiska: obi.dejanskiDatumObiska,
		});
		return this.http.put(`${this.baseUrl}/delovniNalog/obisk`,JSON.stringify(obisk),{headers: this.headers});
	}
}

