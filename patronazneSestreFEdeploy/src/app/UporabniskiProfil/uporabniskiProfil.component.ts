import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UporabnikService } from '../registracija/uporabnik.service';
import { Spol } from '../Pacient';
import { Posta } from '../Pacient';
import { Okolis } from '../Pacient';
import { Pacient } from '../Pacient';
import { Kontakt } from '../registracija/kontakt';
import { Kontakts } from '../Pacient';
import { sorodstvenoRazmerje } from "../registracija/kontakt";
@Component({
  selector: 'uporabniskiProfil',
  templateUrl: './uporabniskiProfil.component.html',
  styleUrls: ['./uporabniskiProfil.component.css']
})

export class UporabniskiProfilComponent implements OnInit{
	private restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private http: Http, private router: Router,private uporabnikService: UporabnikService){}
	dodaj = false;
	res:any;
	poste: Posta[];
	spoln: Spol[];
	okoliss: Okolis[];
	razmerjas: sorodstvenoRazmerje[] = [{'idsorodstvenoRazmerje':0,'opis':''}];
	stevec = 0;
	vec = false;
	dodajPac = false;
	subNiPravi = true;
	spoli:any = [{'idspol':0,'opis':''}];
	submitted = false;

	izbranoRazmerje: sorodstvenoRazmerje = ({idsorodstvenoRazmerje:0,opis:''});
	okolisi: Okolis[] = [{'idokolis': 1,'opis': '','idposta':1000}];
	okolisis: Okolis[] = [{'idokolis': 1,'opis': '','idposta':1000}];
	izbrOkolis: Okolis = ({'idokolis':1,'opis':'','idposta':1000});
	postSt = '';
	kime = '';
	kpriimek = '';
	ktel = '';
	kulica = '';
	khisnaStevilka = '';
	kpostneStevilke:any[] = [{}];
	devided = '';
	krazmerja: any[] = [{}];
	glavni = 0;

	kontakts: Kontakts = null;
	posta = ({'idposta':0,'opis':''});
	kontakt:any = ({'kime':this.kime,'kpriimek':this.kpriimek,'ktel':this.ktel,'kulica':this.kulica,'khisnaStevilka':this.khisnaStevilka,'kpostnaStevilka':this.kpostneStevilke[0],'krazmerje':this.krazmerja[0]});
	spol = ({'idspol':0,'opis':''});
	posta2 = ({'idposta':0,'opis':''});
	okolis = ({'idokolis':0,'opis':'','posta':this.posta2,});
	vloga = ({'idvloga':0,'opis':''});
	uporabnik = ({'iduporabnik':0,'aktivirajDo':'','zadnjaPrijava':'','email':'','geslo':'','vloga':this.vloga});
	model:any[] = [{'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakts,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik}];
	postneStevilke: any[] = [{}];
	model2:any[] = [{'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakt,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':'','uporabnik':this.uporabnik}];
	model3:any[] = [{}]; /*= [{'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakt,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik}];*/
	odstranitev = false;
	odstranjeniPacient = "";
	ngOnInit(){

		console.log(localStorage['iduporabnik']);
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		this.model[0] = ({'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakts,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik});
		this.http.get(`${this.restUrl}/pacient/uporabnikId/${localStorage['iduporabnik']}`, {headers: headers}).map((response: Response) => response.json()).subscribe(res => {this.res = res;
		var vmesna = JSON.stringify(this.res);
		var dobiUporabnika = JSON.parse(vmesna);
		console.log(dobiUporabnika);
		this.model[0] = dobiUporabnika;
		this.postSt = dobiUporabnika.posta.idposta.toString()+" "+dobiUporabnika.posta.opis.toString();
		this.izbrOkolis = dobiUporabnika.okolis;
		this.devided = dobiUporabnika.posta.idposta;
		console.log(dobiUporabnika.idpacient);
		this.glavni = dobiUporabnika.idpacient;

		this.uporabnikService.getRazmerje().subscribe(data => {this.razmerjas = data;
        let i = 0;

        for(let entry of this.razmerjas){

          this.krazmerja[i] = entry;
          i = i+1;
        }
      },
      err => {console.log(err);});
	  this.uporabnikService.getPoste().subscribe(data => {this.poste = data;
		let i = 0;
		let j = 0;
		for(let entry of this.poste){

			this.postneStevilke[i] = (entry[0].toString()+" "+entry[1].toString());
			this.kpostneStevilke[j] = (entry[0].toString()+" "+entry[1].toString());
			i = i+1;
			j = j+1;

		}
	},
	err => {console.log(err);});
	this.uporabnikService.getSpol().subscribe(data => {this.spoln = data;
	let i = 0;

	for(let entry of this.spoln){

		this.spoli[i] = ({'idspol':entry[0],'opis':entry[1]});
		console.log(this.spoli[i]);
		i = i+1;
	}
	},
	err => {console.log(err);});

	console.log(this.devided);
	  this.uporabnikService.getOkolisByPosta(Number(this.devided)).subscribe(data => {this.okoliss = data;
	  let i = 0;

	  for(let entry of this.okoliss){

		  this.okolisi[i] = entry;

		  i = i+1;
	  }
	  });
	  if(dobiUporabnika.kontakt != null){
		this.dodaj = true;
		this.kontakt.kime = dobiUporabnika.kontakt.ime;
		this.kontakt.kpriimek = dobiUporabnika.kontakt.priimek;
		this.kontakt.ktel = dobiUporabnika.kontakt.telefonskaStevilka;
		this.kontakt.khisnaStevilka = dobiUporabnika.kontakt.hisnaStevilka;
		this.kontakt.kpostnaStevilka = dobiUporabnika.kontakt.posta.idposta+" "+dobiUporabnika.kontakt.posta.opis;
		this.kontakt.kulica = dobiUporabnika.kontakt.ulica;
		console.log(dobiUporabnika.kontakt.sorodstvenoRazmerje.opis);
		this.izbranoRazmerje = dobiUporabnika.kontakt.sorodstvenoRazmerje;
	  }

	  if(dobiUporabnika.pacients.length > 0){
		let d = 0;
		console.log(dobiUporabnika.pacients);
		this.vec = true;
		for(let njegovi of dobiUporabnika.pacients){
			let nov = <any> ({
				idpacient: this.glavni,
			});
			var tabela: Okolis[] = [{'idokolis': 1,'opis': '','idposta':1000}];
			var novi = ({'idpacient':njegovi.idpacient,'hisnaStevilka':njegovi.hisnaStevilka,'ime':njegovi.ime,'priimek':njegovi.priimek,'stevilkaZdravstvenegaZavarovanja':njegovi.stevilkaZdravstvenegaZavarovanja,'telefonskaStevilka':njegovi.telefonskaStevilka,'ulica':njegovi.ulica,'datumRojstva':njegovi.datumRojstva,'posta':njegovi.posta,'sorodstvenoRazmerje':njegovi.sorodstvenoRazmerje,'spol':njegovi.spol,'okolis':njegovi.okolis,'uporabnik':njegovi.uporabnik,'pacient':nov,'oko':tabela});
			tabela = this.najdiOkolise(njegovi.posta.idposta);
			console.log(novi.okolis.opis);
			novi.oko = tabela;
			this.model2[d] = novi;
			d = d+1;
		}
	  }
	});

	}

	najdiOkolise(postnaSt: number): Okolis[]{
		var tabela: Okolis[] = [{'idokolis': 0,'opis': 'iscem okolise','idposta':1000}];
		setTimeout(() => {
		this.uporabnikService.getOkolisByPosta(postnaSt).subscribe(data => {this.okoliss = data;
		let i = 0;
			for(let entry of this.okoliss){
				tabela[i] = entry;
				i = i+1;
			}

		});
		},500);
		return tabela;
	}
	onChangePostnaStevilkaB(sprememba: String,ime: String){
		var devided = sprememba.split(' ');
		for(let b of this.model2){
			if(b.ime == ime){
				b.oko = this.najdiOkolise(Number(devided[0]));
				break;
			}
		}
	}
	onChangePostnaStevilka(sprememba: String,ime: String){
	  console.log(ime);
	  var devided = sprememba.split(' ');
	  this.uporabnikService.getOkolisByPosta(Number(devided[0])).subscribe(data => {this.okoliss = data;
	  let i = 0;
	  for(let entry of this.okoliss){

		  this.okolisi[i] = entry;

		  i = i+1;
	  }
	  });


	}
	onChangePostnaStevilka2(sprememba: String,ime: String){
	  var devided = sprememba.split(' ');
	  for(let b of this.model3){
			if(b.ime == ime){
				b.oko = this.najdiOkolise(Number(devided[0]));
				break;
			}
		}
	}
	dodajPacienta(){
		console.log(this.spoli[0].opis);
		let nov = <any> ({
			idpacient: this.glavni,
		});
		var tabela: Okolis[] = [{'idokolis': 0,'opis': 'ni izbrana posta','idposta':1000}];
		this.model3[this.stevec]= ({'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','posta':this.posta,'spol':this.spol,'okolis':this.okolis,'uporabnik':null,'sorodstvenoRazmerje':'','pacient':nov,'oko':tabela});
		this.stevec = this.stevec+1;
		this.dodajPac = true;
	}
	odstraniPacienta(){
		this.stevec = this.stevec-1;
		this.model3.splice(this.stevec,1);
		if(this.stevec == 0){
			this.dodajPac = false;
		}
		console.log(this.model3.length);
	}
	onSubmit(){
		var length = 0;
		if(this.dodajPac == true){
			length = this.model3.length;
			for(let nk of this.model3){

				if(nk.ime==undefined || nk.okolis == undefined){
					this.subNiPravi = false;
					break;
				}

			}
		}else{
			this.subNiPravi = true;
		}

		this.model[0].posta = this.postSt;
		this.model[0].okolis = this.izbrOkolis;


		this.model[0].pacients = [];
		if(this.model2[0].ime != ""){
			for(let n of this.model2){
				delete n.oko;
				let posta = n.posta;
				if(typeof n.posta != 'object'){
					var devided1 = n.posta.split(' ');
					posta = <Posta>({
						idposta: Number(devided1[0]),
						opis: devided1[1],
					});

					n.posta = posta;
				}
				if(typeof n.okolis != 'object'){
					var devided2= n.okolis.split(' ');


					let okolis = <Okolis>({
						idokolis: Number(devided2[1]),
						opis: devided2[0].toString(),
						posta: posta
					});

					n.okolis = okolis;
				}
				this.model[0].pacients.push(n);

			}
		}
		console.log(this.model3[0]);
		if(this.dodajPac == true){
			for(let nk of this.model3){
					delete nk.oko;
					var devided1 = nk.posta.split(' ');
						let posta = <Posta>({
							idposta: Number(devided1[0]),
							opis: devided1[1],
						});
						var sp = 1;
						if(nk.spol == 'Moški'){
							sp = 1;
						}else{
							sp = 2;
						}
						let spol = <Spol>({
							idspol: sp,
							opis: nk.spol,
						});
						console.log(nk.okolis.opis);
						/*var devided2= nk.okolis.split(' ');


						let okolis = <Okolis>({
							idokolis: Number(devided2[1]),
							opis: devided2[0].toString(),
							posta: posta
						});*/
						nk.posta = posta;
						nk.spol = spol;
						//nk.okolis = okolis;
					for(let raz of this.krazmerja){
						if(nk.sorodstvenoRazmerje == raz.opis){
							console.log("NAJDU");
							let nov = <any>({
								idsorodstvenoRazmerje: raz.idsorodstvenoRazmerje,
							});
							nk.sorodstvenoRazmerje = nov;
							break;
						}
					}
				this.model[0].pacients.push(nk);

			}
		}
		console.log(this.dodaj);
		console.log(this.kontakt);
		this.kontakt.krazmerje = this.izbranoRazmerje;
		console.log(this.model[0]);
		this.uporabnikService.update(this.model[0],this.dodaj,this.kontakt).subscribe(
            (r: Response) => {this.submitted = true;},
			err => {console.log(err);}
          );
	}
	odstraniMojega(stZZ:String){
		var length = 0;
		if(this.dodajPac == true){
			length = this.model3.length;
			for(let nk of this.model3){

				if(nk.ime==undefined || nk.okolis == undefined){
					this.subNiPravi = false;
					break;
				}

			}
		}else{
			this.subNiPravi = true;
		}

		this.model[0].posta = this.postSt;
		this.model[0].okolis = this.izbrOkolis;

		this.model[0].pacients = [];
		if(this.model2[0].ime != ""){
			for(let n of this.model2){
				delete n.oko;
				let posta = n.posta;
				if(typeof n.posta != 'object'){
					var devided1 = n.posta.split(' ');
					posta = <Posta>({
						idposta: Number(devided1[0]),
						opis: devided1[1],
					});

					n.posta = posta;
				}
				if(typeof n.okolis != 'object'){
					var devided2= n.okolis.split(' ');


					let okolis = <Okolis>({
						idokolis: Number(devided2[1]),
						opis: devided2[0].toString(),
						posta: posta
					});

					n.okolis = okolis;
				}
				console.log(n.stevilkaZdravstvenegaZavarovanja);
				console.log(stZZ);
				if(n.stevilkaZdravstvenegaZavarovanja == stZZ){
					this.odstranjeniPacient = n.ime+" "+n.priimek;
					this.uporabnikService.pobrisi(n).subscribe(res => {this.odstranitev = true;
					this.submitted = true;
					});
					continue;
				}
				this.model[0].pacients.push(n);

			}
		}
		console.log(this.model3[0]);
		if(this.dodajPac == true){
			for(let nk of this.model3){
					delete nk.oko;
					var devided1 = nk.posta.split(' ');
						let posta = <Posta>({
							idposta: Number(devided1[0]),
							opis: devided1[1],
						});
						var sp = 1;
						if(nk.spol == 'Moški'){
							sp = 1;
						}else{
							sp = 2;
						}
						let spol = <Spol>({
							idspol: sp,
							opis: nk.spol,
						});
						console.log(nk.okolis.opis);
						/*var devided2= nk.okolis.split(' ');


						let okolis = <Okolis>({
							idokolis: Number(devided2[1]),
							opis: devided2[0].toString(),
							posta: posta
						});*/
						nk.posta = posta;
						nk.spol = spol;
						//nk.okolis = okolis;
					for(let raz of this.krazmerja){
						if(nk.sorodstvenoRazmerje == raz.opis){
							console.log("NAJDU");
							let nov = <any>({
								idsorodstvenoRazmerje: raz.idsorodstvenoRazmerje,
							});
							nk.sorodstvenoRazmerje = nov;
							break;
						}
					}
				this.model[0].pacients.push(nk);

			}
		}
		console.log(this.dodaj);
		console.log(this.kontakt);
		this.kontakt.krazmerje = this.izbranoRazmerje;
		console.log(this.model[0]);
		this.uporabnikService.update(this.model[0],this.dodaj,this.kontakt).subscribe(
            (r: Response) => {console.log("success")},
			err => {console.log(err);}
          );

	}
}
