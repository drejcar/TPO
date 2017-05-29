import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'planiranjeObiskov',
  templateUrl: './planiranjeObiskov.component.html',
  styleUrls: ['./planiranjeObiskov.component.css']
})

export class PlaniranjeObiskovComponent implements OnInit{
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
	constructor(private router:Router, private http:Http,private DNService: izpisDNService,private datePipe: DatePipe){}

	res: any;
	izbraniDatum='';
	aliJeVecji: boolean = false;
	tabelaDejanskiObiskovFixenDat: any[] = [{idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:undefined}];
	tabelaObiskovVsi: any[];
	tabelaObiskov: any[] = [{idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0}];
	tabelaObiskovFix: any[] = [{idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0}];
	tabelaDejanskiObiskov: any[] = [{idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0}];

	tabelaDelovnihNalogov: any[];
	delovniNalog: any;

	ngOnInit(){
		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(res => {
			this.res = res.json();
			var vmesna = JSON.stringify(this.res);
			var dobiZd = JSON.parse(vmesna);

			localStorage.setItem('idZdravstvenegaDelavca',dobiZd.idzdravstveniDelavec.toString());
					localStorage.setItem('idIzv',dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
		});
		setTimeout(() => {

			this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca')),0).subscribe(res => {this.tabelaObiskovVsi = res;
					let i = 0; //stevec za obiske
					let d = 0; //stevec za paciente
					let j = 0; //stevec za vrste obiskov
					let m = 0; //stevec za zdravstvene delavce
					this.tabelaDelovnihNalogov = this.tabelaObiskovVsi;
					var date = new Date();
					var datum=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+(date.getDate()+1);
					let newDate = new Date(datum);
					this.izbraniDatum = this.datePipe.transform(newDate,'yyyy-MM-dd');
					var datum = this.izbraniDatum;
					for(let dn of this.tabelaObiskovVsi){
						for(let ob of dn.obisks){
							console.log(ob.nadomestnaSestra.idzdravstveniDelavec);
							console.log(localStorage.getItem('idZdravstvenegaDelavca'));
							if(ob.nadomestnaSestra.idzdravstveniDelavec != localStorage.getItem('idZdravstvenegaDelavca')){
								continue;
							}
							let obisk = <any> ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0,nadomescanje:''});
							obisk.idDelovniNalog = dn.iddelovniNalog;
							
							obisk.idObiska = ob.idobisk;
							obisk.vrstaObiska = dn.vrstaObiska.opis;
							obisk.pacienti = dn.pacients[0].ime+' '+dn.pacients[0].priimek;
							if(ob.opravljen == 0){
								obisk.opravljenost = 'Neopravljen';
							}else{

								continue;

							}

							//datumi
							obisk.predvideniDatumObiska = ob.datumObiska;
							obisk.dejanskiDatumObiska = ob.dejanskiDatumObiska;

							//zapisovanje objekta v dejanski
							console.log(ob.fixenDatum);
							if(obisk.dejanskiDatumObiska == datum && ob.fixenDatum == 0){
								obisk.dodaj = 'Fiksni datum';
								obisk.fiksniDatum = 'DA';
								this.tabelaDejanskiObiskovFixenDat[j] = obisk;
								j = j+1;
							}else if(ob.fixenDatum == 0 && obisk.dejanskiDatumObiska != datum){
								obisk.dodaj = 'Fiksni datum';
								obisk.fiksniDatum = 'DA';
								this.tabelaDejanskiObiskov[i] = obisk;
								i=i+1;
							}else if(obisk.dejanskiDatumObiska == datum && ob.fixenDatum == 1){
								obisk.dodaj = 'Odstrani';
								obisk.fiksniDatum = 'NE';
								this.tabelaDejanskiObiskovFixenDat[j] = obisk;
								j = j+1;
							}else{
								obisk.dodaj = 'Dodaj';
								obisk.fiksniDatum = 'NE';
								this.tabelaDejanskiObiskov[i] = obisk;
								i = i+1;
							}
						}
						this.tabelaDejanskiObiskov = this.bubbleSort(this.tabelaDejanskiObiskov);
						console.log(this.tabelaDelovnihNalogov);
						console.log(this.tabelaDejanskiObiskovFixenDat[0].idObiska);
						if(this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0){
							console.log("prslo je sm")
							this.tabelaObiskovVsi = this.tabelaDejanskiObiskov.concat(this.tabelaDejanskiObiskovFixenDat);
							this.aliJeVecji = true;
						}else{
							this.tabelaObiskovVsi = this.tabelaDejanskiObiskov;
							this.aliJeVecji = false;
						}
					}

				});
		},1000);
	}
	bubbleSort(tabela: any[]): any[]{
		for(var i=0; i < tabela.length -1 ; i++) {
			for(var x=0; x < tabela.length - 1; x++) {
				var parts:any[] = tabela[x].predvideniDatumObiska.split('-');
				var prvi = parts[0]+parts[1]+parts[2];
				parts = tabela[x+1].predvideniDatumObiska.split('-');
				var drugi = parts[0]+parts[1]+parts[2];
				if(Number(prvi) > Number(drugi)) {
					var theGreater = tabela[x];
					tabela[x] = tabela[x + 1];
					tabela[x+1] = theGreater;
				}
			}
		}
		return tabela;
	}
	Onsubmit(){
		//zapisovanje objekta v dejanski
		let i = 0;
		let j = 0;
		console.log(this.izbraniDatum);
		this.tabelaDejanskiObiskov = [];
		this.tabelaDejanskiObiskovFixenDat = [];
		this.tabelaDejanskiObiskovFixenDat[0] = ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:undefined});
		//var parts: any[] = this.izbraniDatum.split('-');
		var datum = this.izbraniDatum;/*parts[0]+parts[1]+parts[2];*/

		for(let ob of this.tabelaObiskovVsi){
			if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA'){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;

			}else if(ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskov[i] = ob;
				i=i+1;
			}else if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE'){

				ob.dodaj = 'Odstrani';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;
			}else{
				ob.dodaj = 'Dodaj';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskov[i] = ob;
				i = i+1;
			}
		}


		//preveri ce je manjsi ali vecji od 2
		if(this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0){
			console.log("prslo je sm")
			this.aliJeVecji = true;
		}else{
			this.aliJeVecji = false;
		}
	}

	dodajKDnevu(event: any){
		console.log(event);
		var i = 0;
		var j = 0;
		this.tabelaDejanskiObiskovFixenDat = [];
		this.tabelaDejanskiObiskovFixenDat[0] = ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:undefined})
		this.tabelaDejanskiObiskov = [];
		this.tabelaDejanskiObiskov[0] = ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0});
		var datum = this.izbraniDatum;
		console.log(this.izbraniDatum);
		console.log(this.tabelaDelovnihNalogov);
		for(let obi of this.tabelaObiskovVsi){
			if(event == obi.idObiska){
				obi.dejanskiDatumObiska = datum;
				var neki = false;
				for(let d of this.tabelaDelovnihNalogov){
					for(let b of d.obisks){
						if(b.idobisk == obi.idObiska){
							this.delovniNalog = d;
							neki = true;
							break;
						}

					}
					if(neki == true){
						break;
					}
				}
				this.DNService.updateDatum(obi,this.delovniNalog).subscribe(res => {console.log("uspeh")},err => {console.log("neuspeh")});
				//TODO tuki pride rest klic za spremembo datuma znotraj baze;
				break;
			}
		}
		for(let ob of this.tabelaObiskovVsi){


			if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA'){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;

			}else if(ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskov[i] = ob;
				i=i+1;
			}else if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE'){

				ob.dodaj = 'Odstrani';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;
			}else{
				ob.dodaj = 'Dodaj';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskov[i] = ob;
				i = i+1;
			}
		}
		if(this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0){

			this.aliJeVecji = true;
		}else{
			this.aliJeVecji = false;
		}
	}
	odstraniIzDneva(event: any){
		var i = 0;
		var j = 0;
		this.tabelaDejanskiObiskovFixenDat = [];
		this.tabelaDejanskiObiskovFixenDat[0] = ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:undefined})
		this.tabelaDejanskiObiskov = [];
		this.tabelaDejanskiObiskov[0] = ({idObiska:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',predvideniDatumObiska:'',dejanskiDatumObiska:'',opravljenost:'',dodaj:'',fiksniDatum:'',idDelovniNalog:0});
		var parts: any[] = this.izbraniDatum.split('-');
		var datum = parts[0]+'-'+parts[1]+'-'+(Number(parts[2])+1).toString();
		console.log(this.tabelaDelovnihNalogov);
		for(let obi of this.tabelaObiskovVsi){
			if(event == obi.idObiska){
				console.log(obi.dejanskiDatumObiska);
				console.log(datum);
				obi.dejanskiDatumObiska = datum;
				var neki = false;
				for(let d of this.tabelaDelovnihNalogov){
					for(let b of d.obisks){
						if(b.idobisk == obi.idObiska){
							this.delovniNalog = d;
							neki = true;
							break;
						}

					}
					if(neki == true){
						break;
					}
				}
				this.DNService.updateDatum(obi,this.delovniNalog).subscribe(res => {console.log("uspeh")},err => {console.log("neuspeh")});
				//TODO tuki pride rest klic za spremembo datuma znotraj baze;
				break;
			}
		}
		datum = this.izbraniDatum;
		for(let ob of this.tabelaObiskovVsi){


			if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'DA'){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;

			}else if(ob.fiksniDatum == 'DA' && ob.dejanskiDatumObiska != datum){
				ob.dodaj = 'Fiksni datum';
				ob.fiksniDatum = 'DA';
				this.tabelaDejanskiObiskov[i] = ob;
				i=i+1;
			}else if(ob.dejanskiDatumObiska == datum && ob.fiksniDatum == 'NE'){

				ob.dodaj = 'Odstrani';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskovFixenDat[j] = ob;
				j = j+1;
			}else{
				ob.dodaj = 'Dodaj';
				ob.fiksniDatum = 'NE';
				this.tabelaDejanskiObiskov[i] = ob;
				i = i+1;
			}
		}
		this.tabelaDejanskiObiskov = this.bubbleSort(this.tabelaDejanskiObiskov);
		if(this.tabelaDejanskiObiskovFixenDat[0].idObiska != 0){

			this.aliJeVecji = true;
		}else{
			this.aliJeVecji = false;
		}

	}

}
