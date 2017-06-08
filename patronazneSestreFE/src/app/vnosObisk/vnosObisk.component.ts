import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { izpisDNService} from '../izpisDelovnihNalogov/izpisDN.service';
import { PorociloPreventivaStarostnika } from '../_entitete/porociloPreventivaStarostnika';
import { PorociloOdvzemKrvi } from '../_entitete/porociloOdvzemKrvi';
import { PorociloObiskOtrocnice } from '../_entitete/porociloObiskOtrocnice';
import { PorociloObiskNosecnice } from '../_entitete/porociloObiskNosecnice';
import { PorociloAplikacijaInjekcije } from '../_entitete/porociloAplikacijaInjekcije';
import { PorociloKontrolaZdravstvenegaStanja } from '../_entitete/porociloKontrolaZdravstvenegaStanja';
import { PorociloObiskNovorojencka,obiskA } from '../_entitete/porociloObiskNovorojencka';


@Component({
  selector: 'vnosObisk',
  templateUrl: './vnosObisk.component.html',
  styleUrls: ['./vnosObisk.component.css']
})

export class VnosObiskComponent implements OnInit{
	idObiska = 0;
	aplikacijaInjekcije = false;
	kontrolaZdravstvenegaStanja = false;
	obiskNosecnice = false;
	obiskNovorojencka =false;
	obiskOtrocnice = false;
	odvzemKrvi = false;
	preventivaStarostnika = false;
	dis = false;
	spremeni = false;
  checkboxvalid=false;
  private headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
	private baseUrl = 'http://localhost:8080/patronazneSestre/v1';
  constructor(private http: Http,private router:Router, private route: ActivatedRoute,private location: Location,private dnService:izpisDNService) {}
	res: any;
	obisk: any;

	porociloAplikacijaInjekcijeA: PorociloAplikacijaInjekcije = ({'akt20':'','akt10':''});

  porociloPreventivaStarostnika:PorociloPreventivaStarostnika=({
    'akt10': '',
    'akt20': '',
    'akt30a':undefined,
    'akt30b':undefined,
    'akt40':undefined,
    'akt50':undefined,
    'akt60':undefined,
    'akt70':undefined,
    'akt80':'',
    'akt90':'',
    'akt100a':'',
    'akt100b':'',
    'akt110':'',
    'akt120a':'',
    'akt120b':'',
    'akt120c':'',
    'akt120d':'',
    'akt120e':'',
    'akt130':'',
    'akt140':'',
    'akt150a':'',
    'akt150b':'',
    'akt150c':'',
    'akt160':'',
    'akt170':''
  });
  porociloOdvzemKrvi : PorociloOdvzemKrvi=({
    'akt10modra':undefined,
    'akt10rdeca':undefined,
    'akt10rumena':undefined,
    'akt10zelena':undefined,
    'akt20':''
  });
  porociloObiskOtrocnice : PorociloObiskOtrocnice=({
    'akt10a': '',
    'akt10b': undefined,
    'akt10c': undefined,
    'akt10d': '',
    'akt20': '',
    'akt30': '',
    'akt40': '',
    'akt50': '',
    'akt60': '',
    'akt70': '',
    'akt80': '',
    'akt90': '',
    'akt100': '',
    'akt110': '',
    'akt120': '',
    'akt130': '',
    'akt140': '',
    'akt150': '',
    'akt160a': undefined,
    'akt160b': undefined,
    'akt170': undefined,
    'akt180': undefined,
    'akt190': undefined,
    'akt200': undefined,
    'akt210': '',
    'akt220': '',
    'akt230a': '',
    'akt230b': '',
    'akt240a': '',
    'akt240b': ''
  });
  stevec = 0;
  obiskn: obiskA = ({
	'idobisk':0,
  });
  neki: any = ({
	'niPosebnosti':false,
	'mikcija':false,
	'defekacija':false,
	'napenjanje':false,
	'kolike':false,
	'bruhanje':false,
  })
  porociloObiskNovorojencka:any[]=[{
    'akt10':'',
    'akt20':'',
    'akt30':'',
    'akt40':'',
    'akt50':'',
    'akt60':undefined,
    'akt70':undefined,
    'akt80':'',
    'akt80b':'',
    'akt90a':'',
    'akt90b':'',
    'akt100a':'',// checkboxhandlanje
    'akt100b':'',
    'akt110':'',
    'akt120':'',
    'akt130':'',
    'akt140':'',
	'ime':'',
	'priimek':'',
	'stevilkaZdravstvenegaZavarovanja':'',
	'obisk':this.obiskn,
	'check':this.neki,

  }];
  porociloObiskNosecnice:PorociloObiskNosecnice=({
    'akt10':'',
    'akt20':'',
    'akt30':'',
    'akt40':'',
    'akt50':'',
    'akt60':'',
    'akt70':'',
    'akt80':'',
    'akt90':'',
    'akt100':'',
    'akt110':'',
    'akt120':'',
    'akt130':'',
    'akt140':'',
    'akt150':'',
    'akt160':'',
    'akt170a':'',
    'akt170b':'',
    'akt180a':'',
    'akt180b':'',
    'akt190a':undefined,
    'akt190b':undefined,
    'akt200':'',
    'akt210':'',
    'akt220':undefined,
    'akt230':undefined,
    'akt240':undefined,
  });
  porociloKontrolaZdravstvenegaStanja:PorociloKontrolaZdravstvenegaStanja=({
    'akt10':'',
    'akt20a':undefined,
    'akt20b':undefined,
    'akt30':undefined,
    'akt40':undefined,
    'akt50':undefined,
    'akt60a':undefined,
    'akt60b':'',
    'akt70':undefined,
    'akt80a':'',
    'akt80b':'',
    'akt90':'',
    'akt100':'',
    'akt110':'',
  });
	dn: any;
	vrstaObiska = 0;
	pacienta =({'ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':''});
	pacient:any[]=[{'pacient':this.pacienta}];
	idDn = 0;
	prviZeOpravljen = false;
	mt: any;
	datumRojstva = '';
	porodnaTeža = 0;
	porodnaVisina = 0;
	submitted = false;
	idDelovniNalog = 0;
  ngOnInit(){
	this.route.params.switchMap((params:Params) => this.dnService.getDelovniNalog(Number(+params['id2']))).subscribe(res => {this.dn = res;
		this.vrstaObiska = this.dn.vrstaObiska.idvrstaObiska;
		let stevec = 0;
		this.idDelovniNalog = this.dn.iddelovniNalog;

		if(this.vrstaObiska == 20 || this.vrstaObiska == 30){
			console.log(this.dn.pacients);
			for(let pacients of this.dn.pacients){
				
				if(pacients.uporabnik == null){
					let pacienta = <any>({'ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':''});
					let nov = <any>({'pacient':pacienta});
					this.pacient[stevec] = nov;
					console.log(this.pacient[stevec]);
					this.pacient[stevec].pacient.ime = pacients.ime;
					this.pacient[stevec].pacient.priimek= pacients.priimek;
					this.pacient[stevec].pacient.stevilkaZdravstvenegaZavarovanja = pacients.stevilkaZdravstvenegaZavarovanja;
					
					stevec = stevec+1;
				}else{
					let nov = <any>({'pacient':''});
					this.mt = nov;
					this.mt = pacients.ime+" "+pacients.priimek;
				}
			}
		}else{
			this.mt = this.dn.pacients[0].ime+" "+this.dn.pacients[0].priimek;
		}
		this.idDn = this.dn.iddelovniNalog;
		this.route.params.switchMap((params: Params) => this.dnService.getObisk(Number(+params['id']))).subscribe(res => {this.obisk = res;
			this.idObiska = this.obisk.idobisk;

			let stvc = 0;
			for(let obiski of this.dn.obisks){
				if(obiski.opravljen == 1 && obiski.idobisk != this.idObiska){

					this.prviZeOpravljen = true;


					break;
					}
			}
			var date = new Date();
			console.log(date.getFullYear());
			var mesec = date.getMonth()+1;
			var dni = date.getDate();
			var praviMesec = ''
			var praviDan = '';
			if(mesec < 10){
				praviMesec ='0'+mesec.toString();
			}if(dni < 10){
				praviDan = '0'+dni.toString();
			}if(mesec >= 10){
				praviMesec = mesec.toString();
			}if(dni >= 10){
				praviDan = dni.toString();
			}
			var datum = (date.getFullYear().toString())+praviMesec+praviDan;

			this.dis = false;
			var parts:any[] = this.obisk.dejanskiDatumObiska.split('-')
			var prvi = parts[0]+parts[1]+parts[2];
			console.log(prvi);
			console.log(datum);
			console.log(this.vrstaObiska);
			if(((Number(datum)-Number(prvi)) > 1) || localStorage.getItem('vloga') == 'Pacient' ){
				this.dis = true;
				this.prviZeOpravljen = true;
			}
			if(localStorage.getItem('vloga')=='PatronaznaSluzba' || localStorage.getItem('vloga')=='Zdravnik' || localStorage.getItem('vloga')=='Pacient'){
				this.dis = true;
				this.prviZeOpravljen = true;
			}
				console.log(this.obisk.fixenDatum)
			if(this.obisk.fixenDatum == 0 && ((Number(datum)-Number(prvi)) != 0)){
				this.dis = true;
				this.prviZeOpravljen = true;
			}
			if(this.vrstaObiska == 10){
				if(this.obisk.porociloObiskNosecnice == null){ //ce se ne obstaja
					this.obiskNosecnice = true;
				}else{ //ce ze obstaja
					this.obiskNosecnice = true;
					this.spremeni = true;
					this.porociloObiskNosecnice = this.obisk.porociloObiskNosecnice;
				}

			}else if(this.vrstaObiska == 20){
				if(this.obisk.porociloObiskOtrocnice == null){
					this.obiskOtrocnice = true;
					this.obiskNovorojencka = true;
					console.log(this.pacient)
					this.stevec = 0;
					for(let obiski of this.dn.obisks){
							if(obiski.opravljen == 1){

								this.porociloObiskOtrocnice.akt10a = obiski.porociloObiskOtrocnice.akt10a;
								this.porociloObiskOtrocnice.akt10b = obiski.porociloObiskOtrocnice.akt10b;
								this.porociloObiskOtrocnice.akt10c = obiski.porociloObiskOtrocnice.akt10c;
							}
						}
					
					for(let steviloOtrok of this.pacient){
						console.log(steviloOtrok);
						let novi = ({'idobisk':this.idObiska});
						let neki: any = ({
							'niPosebnosti':false,
							'mikcija':false,
							'defekacija':false,
							'napenjanje':false,
							'kolike':false,
							'bruhanje':false,
						  })
						let nov = <any> ({
						'akt10':'',
						'akt20':'',
						'akt30':'',
						'akt40':'',
						'akt50':'',
						'akt60':0,
						'akt70':0,
						'akt80':'',
						'akt80b':'',
						'akt90a':'',
						'akt90b':'',
						'akt100a':'',
						'akt100b':'',
						'akt110':'',
						'akt120':'',
						'akt130':'',
						'akt140':'',
						'ime':steviloOtrok.pacient.ime,
						'priimek':steviloOtrok.pacient.priimek,
						'stevilkaZdravstvenegaZavarovanja':steviloOtrok.pacient.stevilkaZdravstvenegaZavarovanja,
						'obisk':novi,
						'check':neki,
						});
						this.porociloObiskNovorojencka[this.stevec] = nov;
						this.stevec = this.stevec+1;
					}
				}else{
					this.obiskOtrocnice = true;
					this.obiskNovorojencka = true;
					this.spremeni = true;


					this.porociloObiskNovorojencka = this.obisk.porociloObiskNovorojenckas;
					console.log(this.porociloObiskNovorojencka);
					for(let n of this.porociloObiskNovorojencka){
					let	neki: any = ({
							'niPosebnosti':false,
							'mikcija':false,
							'defekacija':false,
							'napenjanje':false,
							'kolike':false,
							'bruhanje':false,
						  })
						n.check = neki;
						if(n.akt100a == 'Ni posebnosti'){
							n.check.niPosebnosti = true;
						}else{
							var parts:any[] = n.akt100a.split(" ");
							for(let prt of parts){
								
								if(prt == 'Mikcija'){
									n.check.mikcija = true;
								}
								if(prt == 'Defekacija'){
									n.check.defekacija = true;
								}
								if(prt == 'Napenjanje'){
									n.check.napenjanje = true;
								}
								if(prt == 'Kolike'){
									n.check.kolike = true;
								}
								if(prt == 'Bruhanje'){
									n.check.bruhanje = true;
								}
							}
						}
					}
					console.log(this.porociloObiskNovorojencka);
					this.porociloObiskOtrocnice = this.obisk.porociloObiskOtrocnice;
				}

			}else if(this.vrstaObiska == 30){
				if(this.obisk.porociloObiskNovorojencka == null){
					this.obiskOtrocnice = true;
					this.obiskNovorojencka = true;
					this.stevec = 0;
					for(let obiski of this.dn.obisks){
							if(obiski.opravljen == 1){

								this.porociloObiskOtrocnice.akt10a = obiski.porociloObiskOtrocnice.akt10a;
								this.porociloObiskOtrocnice.akt10b = obiski.porociloObiskOtrocnice.akt10b;
								this.porociloObiskOtrocnice.akt10c = obiski.porociloObiskOtrocnice.akt10c;
							}
						}

					for(let steviloOtrok of this.pacient){
					 let neki: any = ({
						'niPosebnosti':false,
						'mikcija':false,
						'defekacija':false,
						'napenjanje':false,
						'kolike':false,
						'bruhanje':false,
					  })
						let novi = ({'idobisk':this.idObiska});
						let nov = <any> ({
						'akt10':'',
						'akt20':'',
						'akt30':'',
						'akt40':'',
						'akt50':'',
						'akt60':0,
						'akt70':0,
						'akt80':'',
						'akt80b':'',
						'akt90a':'',
						'akt90b':'',
						'akt100a':'',
						'akt100b':'',
						'akt110':'',
						'akt120':'',
						'akt130':'',
						'akt140':'',
						'ime':steviloOtrok.pacient.ime,
						'priimek':steviloOtrok.pacient.priimek,
						'stevilkaZdravstvenegaZavarovanja':steviloOtrok.pacient.stevilkaZdravstvenegaZavarovanja,
						'obisk':novi,
						'check':neki,
						});
						this.porociloObiskNovorojencka[this.stevec] = nov;
						this.stevec = this.stevec+1;
					}
				}else{
					this.obiskNovorojencka = true;
					this.obiskOtrocnice = true;
					this.spremeni = true;
					this.porociloObiskNovorojencka = this.obisk.porociloObiskNovorojenckas;
					//dodajamo k check
					for(let n of this.porociloObiskNovorojencka){
						let neki: any = ({
							'niPosebnosti':false,
							'mikcija':false,
							'defekacija':false,
							'napenjanje':false,
							'kolike':false,
							'bruhanje':false,
						  })
						n.check = neki;
						if(n.akt100a == 'Ni posebnosti'){
							n.check.niPosebnosti = true;
						}else{
							var parts:any[] = n.akt100a.split(" ");
							for(let prt of parts){
								console.log(prt);
								if(prt == 'Mikcija'){
									n.check.mikcija = true;
								}
								if(prt == 'Defekacija'){
									n.check.defekacija = true;
								}
								if(prt == 'Napenjanje'){
									n.check.napenjanje = true;
								}
								if(prt == 'Kolike'){
									n.check.kolike = true;
								}
								if(prt == 'Bruhanje'){
									n.check.bruhanje = true;
								}
							}
						}
					}
					console.log(this.porociloObiskNovorojencka);
					this.porociloObiskOtrocnice = this.obisk.porociloObiskOtrocnice;
				}

			}else if(this.vrstaObiska == 40){
				if(this.obisk.porociloPreventivaStarostnika == null){
					this.preventivaStarostnika = true;
				}else{
					this.preventivaStarostnika = true;
					this.spremeni = true;
					this.porociloPreventivaStarostnika = this.obisk.porociloPreventivaStarostnika;
				}

			}else if(this.vrstaObiska == 50){
				if(this.obisk.porociloAplikacijaInjekcije == null){
					this.aplikacijaInjekcije = true;
				}else{
					this.aplikacijaInjekcije = true;
					this.spremeni = true;
					this.porociloAplikacijaInjekcijeA = this.obisk.porociloAplikacijaInjekcije;
				}

			}else if(this.vrstaObiska == 60){
				if(this.obisk.porociloOdvzemKrvi == null){
					this.odvzemKrvi = true;
				}else{
					this.odvzemKrvi = true;
					this.spremeni = true;
					this.porociloOdvzemKrvi = this.obisk.porociloOdvzemKrvi;
				}

			}else if(this.vrstaObiska == 70){
				if(this.obisk.porociloKontrolaZdravstvenegaStanja == null){
					this.kontrolaZdravstvenegaStanja = true;
				}else{
					this.kontrolaZdravstvenegaStanja = true;
					this.spremeni = true;
					this.porociloKontrolaZdravstvenegaStanja = this.obisk.porociloKontrolaZdravstvenegaStanja;


				}
			}
		});
	});

  }
  onSubmit(){
	if(this.vrstaObiska == 10){
		this.obisk.porociloObiskNosecnice = this.porociloObiskNosecnice;
	}else if(this.vrstaObiska == 20){
		this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;

			let absolutni = <any>[{}];
			let novStevec = 0;
			for(let n of this.porociloObiskNovorojencka){
				//noinspection TypeScriptUnresolvedFunction
        absolutni[novStevec] = Object.assign({}, n);
				delete absolutni[novStevec].check;

					if(n.check.niPosebnosti == false){
							if(n.check.mikcija == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Mikcija';
							}
							if(n.check.defekacija == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Defekacija';
							}if(n.check.napenjanje == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Napenjanje';
							}
							if(n.check.kolike == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Kolike';
							}
							if(n.check.bruhanje == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Bruhanje';
							}
						}else{
							absolutni[novStevec].akt100a = 'Ni posebnosti';
						}

				novStevec = novStevec+1;

			}

		this.obisk.porociloObiskNovorojenckas = absolutni;
	}else if(this.vrstaObiska == 30){
		this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
		let absolutni = <any>[{}];
			let novStevec = 0;
			for(let n of this.porociloObiskNovorojencka){
				//noinspection TypeScriptUnresolvedFunction
        absolutni[novStevec] = Object.assign({}, n);
				delete absolutni[novStevec].check;

					if(n.check.niPosebnosti == false){
							if(n.check.mikcija == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Mikcija';
							}
							if(n.check.defekacija == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Defekacija';
							}if(n.check.napenjanje == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Napenjanje';
							}
							if(n.check.kolike == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Kolike';
							}
							if(n.check.bruhanje == true){
								absolutni[novStevec].akt100a = absolutni[novStevec].akt100a+' '+'Bruhanje';
							}
						}else{
							absolutni[novStevec].akt100a = 'Ni posebnosti';
						}

				novStevec = novStevec+1;

			}
		this.obisk.porociloObiskNovorojenckas = absolutni;
	}else if(this.vrstaObiska == 40){
		this.obisk.porociloPreventivaStarostnika = this.porociloPreventivaStarostnika;
	}else if(this.vrstaObiska == 50){
		this.obisk.porociloAplikacijaInjekcije = this.porociloAplikacijaInjekcijeA;
	}else if(this.vrstaObiska == 60){
		this.obisk.porociloOdvzemKrvi = this.porociloOdvzemKrvi;
	}else if(this.vrstaObiska == 70){
		this.obisk.porociloKontrolaZdravstvenegaStanja = this.porociloKontrolaZdravstvenegaStanja;
	}
	this.obisk.opravljen = 1;
	var date = new Date();
		console.log(date.getFullYear());
		var mesec = date.getMonth()+1;
		var dni = date.getDate();
		var praviMesec = ''
		var praviDan = '';
		if(mesec < 10){
			praviMesec ='0'+mesec.toString();
		}if(dni < 10){
			praviDan = '0'+dni.toString();
		}if(mesec >= 10){
			praviMesec = mesec.toString();
		}if(dni >= 10){
			praviDan = dni.toString();
		}
		var datum = (date.getFullYear().toString())+"-"+praviMesec+"-"+praviDan;
		this.obisk.dejanskiDatumObiska = datum;
		var novi = <any> ({
			iddelovniNalog: this.idDn,
		});
		this.obisk.delovniNalog = novi;
		console.log(this.obisk);
	this.dnService.posodobiObisk(this.obisk).subscribe(res =>{this.submitted = true;});
  }
  sprememba(){
	  console.log(this.porociloObiskNovorojencka);
	  let nova = ({'idobisk':this.idObiska});
	if(this.vrstaObiska == 10){
		this.http.put(`${this.baseUrl}/obiski/porociloobisknosecnice`,JSON.stringify(this.porociloObiskNosecnice),{headers:this.headers}).subscribe(res => {this.submitted = true;});

	}else if(this.vrstaObiska == 20){
		this.http.put(`${this.baseUrl}/obiski/porociloobiskotrocnice`,JSON.stringify(this.porociloObiskOtrocnice),{headers:this.headers}).subscribe(res => {console.log("success");});
		let nov = <any> ({
			idobisk:this.idObiska,
		});
		console.log(this.porociloObiskNovorojencka);


			let absolutni = <any>({});
		for(let n of this.porociloObiskNovorojencka){
			n.obisk = nov;
			//noinspection TypeScriptUnresolvedFunction
      absolutni = Object.assign({}, n);
			//for zanka

			delete absolutni.check;
			absolutni.akt100a = '';
					console.log("hello!");
					if(n.check.niPosebnosti == false){
							if(n.check.mikcija == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Mikcija';
							}
							if(n.check.defekacija == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Defekacija';
							}if(n.check.napenjanje == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Napenjanje';
							}
							if(n.check.kolike == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Kolike';
							}
							if(n.check.bruhanje == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Bruhanje';
							}
						}else{
							absolutni.akt100a = 'Ni posebnosti';
						}

			console.log("absolutni je:"+absolutni.akt100a);
			this.http.put(`${this.baseUrl}/obiski/porociloobisknovorojencka`,JSON.stringify(absolutni),{headers:this.headers}).subscribe(res => {console.log("success")});
		}
		this.submitted = true;
	}else if(this.vrstaObiska == 30){
		console.log(this.porociloObiskNovorojencka);
		this.http.put(`${this.baseUrl}/obiski/porociloobiskotrocnice`,JSON.stringify(this.porociloObiskOtrocnice),{headers:this.headers}).subscribe(res => {console.log("success");});
		let nov = <any> ({
			idobisk:this.idObiska,
		});
		let absolutni = <any>({});

		for(let n of this.porociloObiskNovorojencka){
			n.obisk = nov;
			//noinspection TypeScriptUnresolvedFunction
      absolutni = Object.assign({}, n);
			delete absolutni.check;
			absolutni.akt100a = '';
					if(n.check.niPosebnosti == false){
							if(n.check.mikcija == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Mikcija';
							}
							if(n.check.defekacija == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Defekacija';
							}if(n.check.napenjanje == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Napenjanje';
							}
							if(n.check.kolike == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Kolike';
							}
							if(n.check.bruhanje == true){
								absolutni.akt100a = absolutni.akt100a+' '+'Bruhanje';
							}
					}else{
						absolutni.akt100a = 'Ni posebnosti';
					}
			console.log(absolutni.akt100a);
			this.http.put(`${this.baseUrl}/obiski/porociloobisknovorojencka`,JSON.stringify(absolutni),{headers:this.headers}).subscribe(res => {console.log("success")});
		}
		this.submitted = true;
	}else if(this.vrstaObiska == 40){
		this.http.put(`${this.baseUrl}/obiski/porocilopreventivastarostnika`,JSON.stringify(this.porociloPreventivaStarostnika),{headers:this.headers}).subscribe(res => {this.submitted = true;});

	}else if(this.vrstaObiska == 50){
		this.http.put(`${this.baseUrl}/obiski/porociloaplikacijainjekcije`,JSON.stringify(this.porociloAplikacijaInjekcijeA),{headers:this.headers}).subscribe(res => {this.submitted = true;});

	}else if(this.vrstaObiska == 60){
		this.http.put(`${this.baseUrl}/obiski/porociloodvzemkrvi`,JSON.stringify(this.porociloOdvzemKrvi),{headers:this.headers}).subscribe(res => {this.submitted = true;});

	}else if(this.vrstaObiska == 70){
		this.http.put(`${this.baseUrl}/obiski/porocilozdrstanja`,JSON.stringify(this.porociloKontrolaZdravstvenegaStanja),{headers:this.headers}).subscribe(res => {this.submitted = true;});
	}

  }
  spremen(ime:String){
	for(let n of this.porociloObiskNovorojencka){
		if(ime == n.ime){
			n.check.niPosebnosti = true;
			n.check.mikcija = false;
			n.check.defekacija = false;
			n.check.napenjanje = false;
			n.check.kolike = false;
			n.check.bruhanje = false;
			break;
		}
	}
  }
}
