import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nadomescanje',
  templateUrl: './nadomescanje.component.html',
  styleUrls: ['./nadomescanje.component.css']
})

export class NadomescanjeComponent implements OnInit{
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
	constructor(private router: Router, private http: Http){}
	stevec = 1;
	aliJeVec = false;
	Allsestre:any[];
	res:any;
	sestre: any[] = [{'idSestre':0,'ime':'','priimek':'','sifra':0}];
	sestra:any = ({'idSestre':0,'ime':'','priimek':'','sifra':0});
	nadSestra:any = ({'idSestre':0,'ime':'','priimek':'','sifra':0});
	model: any = ({'sestra':this.sestra,'sestre':this.sestre});
	model2: any[] = [{'nadomestnaSestra':this.sestra,'sestre':this.sestre,'od':'','do':'','error':false,'sporocilo':''}];
	sporocilo = "";
	error = false;
	submitted = false;
	ngOnInit(){
		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(res => {
			this.res = res.json();
			var vmesna = JSON.stringify(this.res);
			var dobiZd = JSON.parse(vmesna);
			localStorage.setItem('idIzv',dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
			
		
			this.http.get(`${this.restUrl}/zdravstveniDelavec/byIzv/${localStorage['idIzv']}`, {headers: headers3}).map((response: Response) => response.json()).subscribe(res =>{
				this.Allsestre = res;
				console.log(this.Allsestre);
				let i = 0;
				for(let ses of this.Allsestre){
					if(ses.okolis != null){
						
						let nov: any = ({'idSestre':ses.idzdravstveniDelavec,'ime':ses.ime,'priimek':ses.priimek,'sifra':ses.sifra});
						this.sestre[i] = nov;
						i = i+1;
					}
				}
			});
		});
		this.model.sestre = this.sestre;
		this.model2[0].nadomestnaSestra = this.sestra;
		this.model2[0].sestre = this.sestre;
	}
	dodajNadomescanje(){
		let nov: any = ({'nadomestnaSestra':this.sestra,'sestre':this.sestre,'od':'','do':'','error':false,'sporocilo':''})
		this.model2[this.stevec] = nov;
		this.stevec = this.stevec+1;
		this.aliJeVec = true;
	}
	odstraniNadomescanje(){
		this.stevec = this.stevec-1;
		console.log(this.stevec);
		this.model2.splice(this.stevec,1);
		if(this.stevec == 1){
			this.aliJeVec = false;
		}
	}
	onSubmit(){
		var vecKEna = 0;
		this.error = false;
		this.sporocilo = "";
		for(let izbrane of this.model2){
			console.log(izbrane);
			for(let izbr of this.model2){
				console.log(izbr);
				if(izbr.nadomestnaSestra.idSestre != izbrane.nadomestnaSestra.idSestre){
					
					var datum1 = izbr.od;
					var datum2 = izbr.do;
					var parts: any[] = datum1.split('-');
					var datum1Izb = parts[0]+parts[1]+parts[2];
					parts = datum2.split('-');
					var datum2Izb = parts[0]+parts[1]+parts[2];
					datum1 = izbrane.od;
					datum2 = izbrane.do;
					parts = datum1.split('-');
					var datum1Druge = parts[0]+parts[1]+parts[2];
					parts = datum2.split('-');
					var datum2Druge = parts[0]+parts[1]+parts[2];
					
					console.log(datum1Izb+"-"+datum2Izb);
					console.log(datum1Druge+"-"+datum2Druge);
					if((datum2Izb >= datum1Druge && datum1Druge >= datum1Izb  )|| (datum2Druge >= datum1Izb && datum2Druge <=datum2Izb)){
						this.error = true;
						izbr.error = true;
						izbrane.error = true;
						izbr.sporocilo = "Prislo je do konflikta intervalov";
						izbrane.sporocilo = "Prislo je do konflikta intervalov";
						break;
					}
					
				}else{
					vecKEna = vecKEna+1;
				}
				if(vecKEna >= 2){
					this.sporocilo = "izbrali ste vec istih sester";
					this.error = true;
					break;
				}
			}
		vecKEna = 0;
		}
		if(this.error == false){
			var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
			for(let sestre of this.model2){
				console.log(this.model.sestra.idSestre);
				console.log(sestre.nadomestnaSestra.idSestre);
				this.http.get(`${this.restUrl}/obiski/nadomescanje/${this.model.sestra.idSestre}/${sestre.nadomestnaSestra.idSestre}?od=${sestre.od}&do=${sestre.do}`, {headers: headers3}).subscribe(res => {
					this.submitted = true;
					this.error = false;
				});
			}
			
			
			
		}
		
		
	}
}