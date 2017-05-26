import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'uporabniskiProfil',
  templateUrl: './uporabniskiProfil.component.html',
  styleUrls: ['./uporabniskiProfil.component.css']
})

export class UporabniskiProfilComponent implements OnInit{
	private restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private http: Http, private router: Router){}

	res:any;



	kime = '';
	kpriimek = '';
	ktel = '';
	kulica = '';
	khisnaStevilka = '';
	kpostnaStevilka = '';
	krazmerje = '';

	posta = ({'idposta':0,'opis':''});
	kontakt = ({'kime':this.kime,'kpriimek':this.kpriimek,'ktel':this.ktel,'kulica':this.kulica,'khisnaStevilka':this.khisnaStevilka,'kpostnaStevilka':this.kpostnaStevilka,'krazmerje':this.krazmerje});
	spol = ({'idspol':0,'opis':''});
	posta2 = ({'idposta':0,'opis':''});
	okolis = ({'idokolis':0,'opis':'','posta':this.posta2,});
	vloga = ({'idvloga':0,'opis':''});
	uporabnik = ({'iduporabnik':0,'aktivirajDo':'','zadnjaPrijava':'','email':'','geslo':'','vloga':this.vloga});
	model:any[] = [{'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakt,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik}];


	ngOnInit(){
		console.log(localStorage['iduporabnik']);
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa(localStorage.getItem('email')+':'+localStorage.getItem('password'))});
		this.model[0] = ({'idpacient':0,'hisnaStevilka':'','ime':'','priimek':'','stevilkaZdravstvenegaZavarovanja':'','telefonskaStevilka':'','ulica':'','datumRojstva':'','kontakt':this.kontakt,'posta':this.posta,'sorodstvenoRazmerje':'','spol':this.spol,'okolis':this.okolis,'uporabnik':this.uporabnik});
		this.http.get(`${this.restUrl}/pacient/uporabnikId/${localStorage['iduporabnik']}`, {headers: headers}).map((response: Response) => response.json()).subscribe(res => {this.res = res;
		var vmesna = JSON.stringify(this.res);
		var dobiUporabnika = JSON.parse(vmesna);
		console.log(dobiUporabnika);
		this.model[0] = dobiUporabnika;




		});
	}
	}
