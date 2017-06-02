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
import { PorociloObiskNovorojencka } from '../_entitete/porociloObiskNovorojencka';

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
  constructor(private http: Http,private router:Router, private route: ActivatedRoute,private location: Location,private dnService:izpisDNService) {}
	res: any;
	obisk: any;
	
	porociloAplikacijaInjekcijeA: PorociloAplikacijaInjekcije = ({'akt20':'','akt10':''});
	
  porociloPreventivaStarostnika:PorociloPreventivaStarostnika=({
    'akt10': '',
    'akt20': '',
    'akt30a':0,
    'akt30b':0,
    'akt40':0,
    'akt50':0,
    'akt60':0,
    'akt70':0,
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
    'akt10modra':0,
    'akt10rdeca':0,
    'akt10rumena':0,
    'akt10zelena':0,
    'akt20':''
  });
  porociloObiskOtrocnice : PorociloObiskOtrocnice=({
    'akt10a': '',
    'akt10b': 0,
    'akt10c': 0,
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
    'akt160a': 0,
    'akt160b': 0,
    'akt170': 0,
    'akt180': 0,
    'akt190': 0,
    'akt200': 0,
    'akt210': '',
    'akt220': '',
    'akt230a': '',
    'akt230b': '',
    'akt240a': '',
    'akt240b': ''
  });
  stevec = 0;
  porociloObiskNovorojencka:PorociloObiskNovorojencka[]=[{
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
	'ime':'',
	'priimek':'',
	'stevilkaZdravstvenegaZavarovanja':'',
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
    'akt190a':0,
    'akt190b':0,
    'akt200':'',
    'akt210':'',
    'akt220':0,
    'akt230':0,
    'akt240':0,
  });
  porociloKontrolaZdravstvenegaStanja:PorociloKontrolaZdravstvenegaStanja=({
    'akt10':'',
    'akt20a':0,
    'akt20b':0,
    'akt30':0,
    'akt40':0,
    'akt50':0,
    'akt60a':0,
    'akt60b':'',
    'akt70':0,
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
  ngOnInit(){
	this.route.params.switchMap((params:Params) => this.dnService.getDelovniNalog(Number(+params['id2']))).subscribe(res => {this.dn = res;
		this.vrstaObiska = this.dn.vrstaObiska.idvrstaObiska;
		let stevec = 1;
		for(let obiski of this.dn.obisks){
			if(obiski.opravljen == 1){
				this.prviZeOpravljen = true;
				
				
				break;
			}
		}
		
		if(this.vrstaObiska == 20 || this.vrstaObiska == 30){
			console.log(this.dn.pacients);
			for(let pacients of this.dn.pacients){
				console.log(pacients);
				if(pacients.uporabnik == null){
					console.log(pacients);
					let nov = <any>({'pacient':this.pacienta});
					this.pacient[this.stevec] = nov;
					this.pacient[this.stevec].pacient.ime = pacients.ime;
					this.pacient[this.stevec].pacient.priimek= pacients.priimek;
					this.pacient[this.stevec].pacient.stevilkaZdravstvenegaZavarovanja = pacients.stevilkaZdravstvenegaZavarovanja;
					this.stevec = this.stevec+1;
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
			}
			if(localStorage.getItem('vloga')=='PatronaznaSluzba' || localStorage.getItem('vloga')=='Zdravnik' || localStorage.getItem('vloga')=='Pacient'){
				this.dis = true;
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
						let nov = <PorociloObiskNovorojencka> ({
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
						let novi = ({'idobisk':this.idObiska});
						let nov = <PorociloObiskNovorojencka> ({
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
						});
						this.porociloObiskNovorojencka[this.stevec] = nov;
						this.stevec = this.stevec+1;
					}
				}else{
					this.obiskNovorojencka = true;
					this.obiskOtrocnice = true;
					this.spremeni = true;				
					this.porociloObiskNovorojencka = this.obisk.porociloObiskNovorojenckas;
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
		this.obisk.porociloObiskNovorojenckas = this.porociloObiskNovorojencka;
	}else if(this.vrstaObiska == 30){
		this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
		this.obisk.porociloObiskNovorojenckas = this.porociloObiskNovorojencka;
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
	this.dnService.posodobiObisk(this.obisk).subscribe(res =>{console.log("success");});
  }
  sprememba(){
	if(this.vrstaObiska == 10){
		this.obisk.porociloObiskNosecnice = this.porociloObiskNosecnice;
	}else if(this.vrstaObiska == 20){
		this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
		this.obisk.porociloObiskNovorojenckas = this.porociloObiskNovorojencka;
	}else if(this.vrstaObiska == 30){
		this.obisk.porociloObiskOtrocnice = this.porociloObiskOtrocnice;
		this.obisk.porociloObiskNovorojenckas = this.porociloObiskNovorojencka;
	}else if(this.vrstaObiska == 40){
		this.obisk.porociloPreventivaStarostnika = this.porociloPreventivaStarostnika;
	}else if(this.vrstaObiska == 50){
		this.obisk.porociloAplikacijaInjekcije = this.porociloAplikacijaInjekcijeA;
	}else if(this.vrstaObiska == 60){
		this.obisk.porociloOdvzemKrvi = this.porociloOdvzemKrvi;
	}else if(this.vrstaObiska == 70){
		this.obisk.porociloKontrolaZdravstvenegaStanja = this.porociloKontrolaZdravstvenegaStanja;
	}
	this.dnService.posodobiObisk(this.obisk).subscribe(res =>{console.log("success");});
  }
}
