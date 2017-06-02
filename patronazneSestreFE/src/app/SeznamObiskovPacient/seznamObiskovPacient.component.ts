import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'seznamObiskovPacient',
  templateUrl: './seznamObiskovPacient.component.html',
  styleUrls: ['./seznamObiskovPacient.component.css']
})

export class SeznamObiskovPacientComponent implements OnInit{
	private restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private router:Router, private http: Http, private DNService: izpisDNService){}
	res:any;
	aliObstaja: boolean = false;
	pacienti = [{'ime':'','priimek':'','sifra':'','id':0}];
	izbraniPacient = this.pacienti[0];
	vecJihJe: boolean = false;

	tabelaObiskovVsi: any[];
	tabelaDejanskiObiskov: any[] = [{idObiska:undefined,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',podrobno:'',porocilo:''}]
	aliSoObiski = false;
	ngOnInit(){

		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		this.http.get(`${this.restUrl}/pacient/uporabnikId/${localStorage['iduporabnik']}`,{headers: headers}).subscribe(res => {
		this.res = res.json();
		var vmesna = JSON.stringify(this.res);
		var dobiPacienta = JSON.parse(vmesna);
		localStorage.setItem('idPacienta',dobiPacienta.idpacient.toString());
		this.pacienti[0].ime = dobiPacienta.ime;
		this.pacienti[0].priimek = dobiPacienta.priimek;
		this.pacienti[0].sifra = dobiPacienta.stevilkaZdravstvenegaZavarovanja;
		this.pacienti[0].id = dobiPacienta.idpacient;

		let j = 1; //stevec za paciente
		for(let pacient of dobiPacienta.pacients){

			let pacien = <any>({idpacient:0,ime:'',priimek:''});
			pacien.id = pacient.idpacient;
			pacien.ime = pacient.ime;
			pacien.priimek = pacient.priimek;
			this.pacienti[j] = pacien;
			j = j+1;
		}
		if(this.pacienti.length > 1){
			this.vecJihJe = true;
		}
		});
		//gremo dobit delovne naloge
		console.log(localStorage['idPacienta']);
		setTimeout(() => {
			this.http.get(`${this.restUrl}/pacient/dn/${localStorage['idPacienta']}`,{headers: headers}).map((response: Response) => response.json()).subscribe(res => {this.tabelaObiskovVsi = res;
				let stevecObiskov = 0;
				let i = 0; //stevec za obiske
				console.log(this.tabelaObiskovVsi);
				for(let dn of this.tabelaObiskovVsi){
					for(let ob of dn.obisks){
						if(ob.opravljen == 0){
							continue;
						}
						let obisk = <any> ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',podrobno:''});
						obisk.idObiska = ob.idobisk;
						obisk.porocilo = '/vnosObisk/'+ob.idobisk+'/'+dn.iddelovniNalog;
						obisk.vrstaObiska = dn.vrstaObiska.opis;
						obisk.pacienti = dn.pacients[0].ime+' '+dn.pacients[0].priimek;
						for(let zdr of dn.zdravstveniDelavecs){
							if(zdr.okolis != null){
								obisk.patronaznaSestra =zdr.ime+' '+zdr.priimek+' ['+zdr.sifra+"] "+obisk.patronaznaSestra;


							}else{
								obisk.izdajatelj = zdr.ime+" "+zdr.priimek+" ["+zdr.sifra+"]";
							}
						}
						obisk.predvideniDatumObiska = ob.datumObiska;
						obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
						stevecObiskov = stevecObiskov+1;
						this.tabelaDejanskiObiskov[i] = obisk;
						i = i+1;
					}

				}
				if(stevecObiskov > 0){
					this.aliSoObiski = true;
				}
			});

		},1500);
	}

	Onsubmit(){
		console.log(this.izbraniPacient);
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		let i = 0;
		setTimeout(() => {
			this.http.get(`${this.restUrl}/pacient/dn/${this.izbraniPacient.id}`,{headers: headers}).map((response: Response) => response.json()).subscribe(res => {this.tabelaObiskovVsi = res;
				let i = 0; //stevec za obiske
				console.log(this.tabelaObiskovVsi);
				for(let dn of this.tabelaObiskovVsi){
					for(let ob of dn.obisks){
						if(ob.opravljen == 0){
							continue;
						}
						let obisk = <any> ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',porocilo:''});
						obisk.idObiska = ob.idobisk;
						obisk.porocilo = '/vnosObisk/'+ob.idobisk+'/'+dn.iddelovniNalog;

						obisk.vrstaObiska = dn.vrstaObiska.opis;
						obisk.pacienti = dn.pacients[0].ime+' '+dn.pacients[0].priimek;
						for(let zdr of dn.zdravstveniDelavecs){
							if(zdr.okolis != null){
								obisk.patronaznaSestra =zdr.ime+' '+zdr.priimek+' ['+zdr.sifra+"] "+obisk.patronaznaSestra;


							}else{
								obisk.izdajatelj = zdr.ime+" "+zdr.priimek+" ["+zdr.sifra+"]";
							}
						}
						obisk.predvideniDatumObiska = ob.datumObiska;
						obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;
						this.tabelaDejanskiObiskov[i] = obisk;
						i = i+1;
					}

				}
			});
		},1500);
	}
}
