import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dN,delovniNalog, IzvajalecZdravstvenihStoritev, ZdravstveniDelavec, Pacient, Material, Zdravilo, Bolezen, Storitev} from './delovniNalog';
import { izpisDNService } from './izpisDN.service';

@Component({
	selector: 'delovniNalogi',
	templateUrl: './izpisDelovnihNalogov.component.html',
	styleUrls: [ './izpisDelovnihNalogov.component.css' ]
})

export class izpisDelovnihNalogovComponent implements OnInit{
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
	constructor(private router:Router, private http: Http,private DNService: izpisDNService){}
	res: any;
	aliObstaja: boolean = false;
	izdajatelji= [{'sifra':'','id':0}];
	obiski = [{'name': '','id':0}];
	pacienti = [{'ime':'','priimek':'','id':0}];
	sestre = [{'sifra':'','id':0}];
	izbraniIzdajatelj = this.izdajatelji[0];
	izbraniObisk = this.obiski[0];
	izbraniPacient = this.pacienti[0];
	izbranaSestra = this.sestre[0]
	izbraniDatumIzdajeOd = '';
	izbraniDatumIzdajeDo = '';
	delovniNalogiVsi: any[];
	//delovniNalogi: dN[] = [];
	delovniNalogi:dN[] = [{idDelovnegaNaloga:'',izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',datumIzdaje:''}];
	//podrobniOpis = [{''}]
	ngOnInit(){
		//poiscemo zdravstvenega delavca

		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});

		//rest klic za iskanje zdravstvenih delavcev
		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(res => {
			this.res = res.json();
			var vmesna = JSON.stringify(this.res);
			var dobiZd = JSON.parse(vmesna);

			localStorage.setItem('idZdravstvenegaDelavca',dobiZd.idzdravstveniDelavec.toString());
			localStorage.setItem('idIzv',dobiZd.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev);
			//preverimo kdo želi videti svoje delovne naloge

			if(localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSluzba'){
				this.izdajatelji[0].sifra = dobiZd.sifra;
				this.izdajatelji[0].id = dobiZd.idzdravstveniDelavec;
			}else if(localStorage['vloga'] == 'PatronaznaSestra'){
				this.sestre[0].sifra = dobiZd.sifra;
				this.sestre[0].id = dobiZd.idzdravstveniDelavec;

			}
		});

		setTimeout(() => {
		//TODO rest klic za pridobivanje delovnega naloga

		if(localStorage['vloga'] == 'Zdravnik' || localStorage['vloga'] == 'PatronaznaSluzba'){
			this.DNService.getDelovneNalogePrekIzv(Number(localStorage.getItem('idIzv'))).subscribe(res => {this.delovniNalogiVsi = res;

				let i = 0; //stevec za delovneNaloge
				let d = 0; //stevec za paciente
				let j = 0; //stevec za vrste obiskov
				let m = 0; //stevec za zdravstvene delavce
				let n = 1; //stevec za zdravstvene delavce izd
				//setanje izpisa delovnih nalogov ob initializaciji
				for(let dn of this.delovniNalogiVsi){
					let delovniN = <any> ({idDelovnegaNaloga:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',datumIzdaje:''});
					this.aliObstaja = false;
					delovniN.idDelovnegaNaloga = dn.iddelovniNalog;
					delovniN.vrstaObiska = dn.vrstaObiska.opis;
					//dodaj v subseznam obiskov
					for(let vrsta of this.obiski){
						if(vrsta.id == dn.vrstaObiska.idvrstaObiska){
							this.aliObstaja = true;
							break;
						}
					}
					if(this.aliObstaja == false){
						let obisk = <any> ({'name':'','id':0});
						obisk.name = dn.vrstaObiska.opis;
						obisk.id = dn.vrstaObiska.idvrstaObiska;
						this.obiski[j] = obisk;
						j = j+1;
					}
					//TODO izpis vseh pacientov for loop
					delovniN.pacienti = dn.pacients[0].ime+' '+dn.pacients[0].priimek;
					//dodaj v subseznam pacientov
					this.aliObstaja = false;
					for(let pacient of this.pacienti){
						if(pacient.id == dn.pacients[0].idpacient){
							this.aliObstaja = true;
							break;
						}
					}
					if(this.aliObstaja == false){
						let pacien = <any>({idpacient:0,ime:'',priimek:''});
						pacien.id = dn.pacients[0].idpacient;
						pacien.ime = dn.pacients[0].ime;
						pacien.priimek = dn.pacients[0].priimek;
						this.pacienti[d] = pacien;
						d = d+1;
					}
					//setanje patronaznih sester

					for(let zdr of dn.zdravstveniDelavecs){
						this.aliObstaja = false;
						if(zdr.okolis != null){
							delovniN.patronaznaSestra = zdr.sifra+" "+delovniN.patronaznaSestra;

							//pregled Sester
							for(let ses of this.sestre){
								if(ses.id == zdr.idzdravstveniDelavec){
									this.aliObstaja = true;
									break;
								}
							}
							if(this.aliObstaja == false){
								let novaS = <any> ({sifra:'',id:0})
								novaS.sifra = zdr.sifra;
								novaS.id = zdr.idzdravstveniDelavec;
								this.sestre[m] = novaS
								m = m+1;
							}
						}else{
							this.aliObstaja = false;
							for(let zd of this.izdajatelji){
								if(zd.id == zdr.idzdravstveniDelavec){
									this.aliObstaja = true;
									break;
								}
							}

							if(this.aliObstaja == false){
								let novZd = <any> ({sifra:'',id:0});
								novZd.sifra = zdr.sifra;
								novZd.id = zdr.idzdravstveniDelavec;
								this.izdajatelji[n] = novZd;
								n = n+1;
							}
							delovniN.izdajatelj = zdr.sifra;
						}
					}



					delovniN.datumIzdaje = dn.datumIzdaje;
					this.delovniNalogi[i] = delovniN;
					//stevec ++
					i = i+1;
				}
				this.delovniNalogiVsi = this.delovniNalogi;
				this.Onsubmit();
			});

		}else if(localStorage['vloga'] == 'PatronaznaSestra'){
			this.DNService.getDelovneNaloge(Number(localStorage.getItem('idZdravstvenegaDelavca')),0).subscribe(res => {this.delovniNalogiVsi = res;

				let i = 0; //stevec za delovneNaloge
				let d = 0; //stevec za paciente
				let j = 0; //stevec za vrste obiskov
				let m = 0; //stevec za zdravstvene delavce

				//setanje izpisa delovnih nalogov ob initializaciji
				for(let dn of this.delovniNalogiVsi){
					let delovniN = <any> ({idDelovnegaNaloga:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',datumIzdaje:''});
					this.aliObstaja = false;
					delovniN.idDelovnegaNaloga = dn.iddelovniNalog;
					delovniN.vrstaObiska = dn.vrstaObiska.opis;
					//dodaj v subseznam obiskov
					for(let vrsta of this.obiski){
						if(vrsta.id == dn.vrstaObiska.idvrstaObiska){
							this.aliObstaja = true;
							break;
						}
					}
					if(this.aliObstaja == false){
						let obisk = <any> ({'name':'','id':''});
						obisk.name = dn.vrstaObiska.opis;
						obisk.id = dn.vrstaObiska.idvrstaObiska;
						this.obiski[j] = obisk;
						j = j+1;
					}
					//TODO izpis vseh pacientov for loop

					//dodaj v subseznam pacientov
					for(let pac of dn.pacients){
					this.aliObstaja = false;
						delovniN.pacients = pac.ime+' '+pac.priimek+' '+delovniN.pacients;
						for(let pacient of this.pacienti){

							if(pacient.id == pac.idpacient){
								this.aliObstaja = true;
								break;
							}
						}
						if(this.aliObstaja == false){
							let pacien = <any>({idpacient:0,ime:'',priimek:''});
							pacien.id = pac.idpacient;
							pacien.ime = pac.ime;
							pacien.priimek = pac.priimek;
							this.pacienti[d] = pacien;
							d = d+1;
						}
					}
					//setanje patronaznih sester

					for(let zdr of dn.zdravstveniDelavecs){
						this.aliObstaja = false;
						if(zdr.okolis != null){
							delovniN.patronaznaSestra = zdr.ime+" "+zdr.priimek+" "+delovniN.patronaznaSestra;

							//pregled Sester

						}else{
							for(let zd of this.izdajatelji){
								if(zd.id == zdr.idzdravstveniDelavec){
									this.aliObstaja = true;
								}
							}
							if(this.aliObstaja == false){
								let noviZdr = <any> ({sifra:'',id:0});
								noviZdr.sifra = zdr.sifra;
								noviZdr.id = zdr.idzdravstveniDelavec;
								this.izdajatelji[m] = noviZdr;
								m = m+1;
							}

							delovniN.izdajatelj = zdr.sifra;
						}
					}



					delovniN.datumIzdaje = dn.datumIzdaje;
					this.delovniNalogi[i] = delovniN;
					//stevec ++
					i = i+1;
				}
				this.delovniNalogiVsi = this.delovniNalogi;
			});

		}
		},1000);

	}
	Onsubmit(){
		let i = 0;
		var od = '';
		var datDo = '';
		if(this.izbraniDatumIzdajeOd != ''){
			var parts:any[] = this.izbraniDatumIzdajeOd.split('-');
			od = parts[0]+parts[1]+parts[2];
		}
		if(this.izbraniDatumIzdajeDo != ''){
			var parts:any[] = this.izbraniDatumIzdajeDo.split('-');
			datDo = parts[0]+parts[1]+parts[2];
		}
		let delovniN = <any> ({idDelovnegaNaloga:0,izdajatelj:'',vrstaObiska:'',patronaznaSestra:'',pacienti:'',datumIzdaje:''});
		this.delovniNalogi = [];
		for(let delovni of this.delovniNalogiVsi){
			let test = true;
			var parts:any[] = delovni.datumIzdaje.split('-');
			var dtmizdaje = parts[0]+parts[1]+parts[2];
			var tabelaIfov = [false,false,false,false,false];

				if(delovni.vrstaObiska == this.izbraniObisk.name || this.izbraniObisk.name == '' || this.izbraniObisk.name == undefined){

					tabelaIfov[0] = true;
				}


				if(delovni.izdajatelj == this.izbraniIzdajatelj.sifra || this.izbraniIzdajatelj.sifra == '' || this.izbraniIzdajatelj.sifra == undefined){

					tabelaIfov[1] = true;
				}

				if(delovni.pacienti.indexOf(this.izbraniPacient.ime+" "+this.izbraniPacient.priimek)>=0 || this.izbraniPacient.ime == '' || this.izbraniPacient.ime == undefined){

					tabelaIfov[2] = true;
				}


				if(delovni.patronaznaSestra.indexOf(this.izbranaSestra.sifra)>=0 || this.izbranaSestra.sifra == '' || this.izbranaSestra.sifra == undefined){

					tabelaIfov[3] = true;
				}
				if((Number(dtmizdaje) >= Number(od) && Number(dtmizdaje) <= Number(datDo)) || (datDo == '' && Number(dtmizdaje) >= Number(od)) || (od == '' && Number(dtmizdaje) <= Number(datDo)) || (datDo == '' && od == '')){
					tabelaIfov[4] = true;
				}
				for(let d of tabelaIfov){
					if(d == false){
						test = false;
						break;
					}
				}

				if(test == true){
					delovniN = delovni;
					this.delovniNalogi[i] = delovniN;
					i = i+1;
				}
		}
	}
	OnSub(vrednost:number){
		this.router.navigate(['/podrobnosti/${vrednost}']);
	}
}
