import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delovniNalog, IzvajalecZdravstvenihStoritev, ZdravstveniDelavec, Pacient, Material, Zdravilo, Bolezen, Storitev} from './delovniNalog';

@Component({
	selector: 'delovniNalogi',
	templateUrl: './izpisDelovnihNalogov.component.html',
	styleUrls: [ './izpisDelovnihNalogov.component.css' ]
})

export class izpisDelovnihNalogovComponent implements OnInit{
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
	constructor(private router:Router, private http: Http){}
	res: any;
	izdajatelji = [{'ime': 'test','priimek': 'test','id':0}];
	obiski = [{'name': '','id':0}];
	pacienti = [{'ime': '','priimek':'','id':0}];
	sestre = [{'ime': '','priimek':'','id':0}];
	izbraniIzdajatelj = this.izdajatelji[0];
	izbraniObisk = this.obiski[0];
	izbraniPacient = this.pacienti[0];
	izbranaSestra = this.sestre[0]
	
	
	ngOnInit(){
		//poiscemo zdravstvenega delavca
		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@admin:admin')});	
		
		//rest klic za iskanje zdravstvenih delavcev
		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(res => {
			this.res = res.json();
			var vmesna = JSON.stringify(this.res);
			var dobiZd = JSON.parse(vmesna);
			console.log(dobiZd);
			console.log(dobiZd.ime);
			
			//preverimo kdo želi videti svoje delovne naloge
			
			if(localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSluzba'){
				this.izdajatelji[0].ime = dobiZd.ime;
				this.izdajatelji[0].priimek = dobiZd.priimek;
				this.izdajatelji[0].id = dobiZd.idZdravstveniDelavec;
			}else if(localStorage['vloga'] == 'PatronaznaSestra'){
				this.sestre[0].ime = dobiZd.ime;
				this.sestre[0].priimek = dobiZd.priimek;
				this.sestre[0].id = dobiZd.idZdravstveniDelavec;
				
			}
		});
		
		//TODO rest klic za pridobivanje delovnega naloga
		
	}
}