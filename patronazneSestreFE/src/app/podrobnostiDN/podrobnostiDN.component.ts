import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { Location } from '@angular/common';

@Component({
	selector: 'podrobnosti',
	templateUrl: './podrobnostiDN.component.html',
	styleUrls: [ './podrobnostiDN.component.css' ]
})

export class podrobnostiDNComponent implements OnInit{
	constructor(private router:Router, private http: Http, private DNService: izpisDNService,private route: ActivatedRoute,private location: Location){}
	
	idDelovnegaNaloga=0;
	
	izvNaziv='';
	aliJePraviObisk:boolean = false;
	aliJeOdvzemKrvi:boolean = false;
	aliJeInjekcija:boolean = false;
	izvSifra='';
	izvNaslov='';
	
	izdSifra='';
	izdIme='';
	izdPriimek='';
	
	sestraSifra='';
	sestraOkolis='';
	sestraIme='';
	sestraPriimek='';
	
	pacIme='';
	pacPriimek='';
	pacSZZ='';
	pacNaslov='';
	pacDatumRojstva='';
	pacTelefon='';
	pacPosta='';
	
	pacIme2='';
	pacPriimek2='';
	pacSZZ2='';
	pacNaslov2='';
	pacDatumRojstva2='';
	pacTelefon2='';
	pacPosta2='';
	
	obiskiDatumi= [{'datumObiska':'','fiksniDatum':'','opravljen':''}];
	obiskVrstaStoritve='';
	obiskBolezen='';
	
	zdravila = [{'idZdravila':0,'tipZdravila':''}];
	
	material = [{'tipMateriala':'','kolicina':0}];
	
	delovniNalog: any;
	
	ngOnInit(){
		this.route.params
		.switchMap((params: Params) =>this.DNService.getDelovniNalog(Number(+params['id']))).subscribe(
		response => {this.delovniNalog = response;
			
			this.idDelovnegaNaloga = this.delovniNalog.iddelovniNalog;
			//izvajalec zdravstvenih storitev
			this.izvNaziv = this.delovniNalog.izvajalecZdravstvenihStoritev.naziv;
			this.izvSifra = this.delovniNalog.izvajalecZdravstvenihStoritev.stevilkaIzvajalca;
			this.izvNaslov = this.delovniNalog.izvajalecZdravstvenihStoritev.ulica+" "+this.delovniNalog.izvajalecZdravstvenihStoritev.hisnaStevilka;
			
			//izdajatelj
			for(let i of this.delovniNalog.zdravstveniDelavecs){
				if(i.okolis == null){
					this.izdSifra = i.sifra;
					this.izdIme = i.ime;
					this.izdPriimek = i.priimek;
				}else if(i.okolis != null){
					this.sestraSifra = i.sifra;
					this.sestraOkolis = i.okolis.opis;
					this.sestraIme = i.ime;
					this.sestraPriimek = i.priimek;
				}
			}
			
			//pacient
			if(this.delovniNalog.vrstaObiska.idvrstaObiska == 20 || this.delovniNalog.vrstaObiska.idvrstaObiska == 30){
				this.aliJePraviObisk = true;
				//prvi pacient
				this.pacIme = this.delovniNalog.pacients[0].ime
				this.pacPriimek = this.delovniNalog.pacients[0].priimek
				this.pacSZZ = this.delovniNalog.pacients[0].stevilkaZdravstvenegaZavarovanja;
				this.pacNaslov = this.delovniNalog.pacients[0].ulica+" "+this.delovniNalog.pacients[0].hisnaStevilka;
				this.pacDatumRojstva = this.delovniNalog.pacients[0].datumRojstva;
				this.pacTelefon = this.delovniNalog.pacients[0].telefonskaStevilka;
				this.pacPosta = this.delovniNalog.pacients[0].uporabnik.email;
				//drugi pacient
				this.pacIme2 = this.delovniNalog.pacients[1].ime
				this.pacPriimek2 = this.delovniNalog.pacients[1].priimek
				this.pacSZZ2 = this.delovniNalog.pacients[1].stevilkaZdravstvenegaZavarovanja;
				this.pacDatumRojstva2 = this.delovniNalog.pacients[1].datumRojstva;
				this.pacTelefon2 = this.delovniNalog.pacients[1].telefonskaStevilka;
				this.pacNaslov2 = this.delovniNalog.pacients[1].posta.idposta+" "+this.delovniNalog.pacients[1].posta.opis;
				this.pacPosta2 = this.delovniNalog.pacients[1].uporabnik.email;
			}else{
				this.aliJePraviObisk = false;
				this.pacIme = this.delovniNalog.pacients[0].ime
				this.pacPriimek = this.delovniNalog.pacients[0].priimek
				this.pacSZZ = this.delovniNalog.pacients[0].stevilkaZdravstvenegaZavarovanja;
				this.pacNaslov = this.delovniNalog.pacients[0].ulica+" "+this.delovniNalog.pacients[0].hisnaStevilka;
				this.pacDatumRojstva = this.delovniNalog.pacients[0].datumRojstva;
				this.pacTelefon = this.delovniNalog.pacients[0].telefonskaStevilka;
				this.pacPosta = this.delovniNalog.pacients[0].uporabnik.email;
			}
			
			//obiski
			let j = 0;
			for(let i of this.delovniNalog.obisks){
				let novObisk = <any> ({'datumObiska':'','fiksniDatum':'','opravljen':''});
				
				novObisk.datumObiska = i.datumObiska;
				if(i.opravljen == 0){
					novObisk.opravljen = 'Neopravljen';
				}else{
					novObisk.opravljen = 'Opravljen';
				}
				if(i.fixenDatum == 1){
					novObisk.fiksniDatum = 'Ne';
				}else{
					novObisk.fiksniDatum = 'Da';
				}
				this.obiskiDatumi[j] = novObisk;
				j = j+1;
			}
			//bubble sort za sortiranje datume obiskov
			for(var i=0; i < this.obiskiDatumi.length -1 ; i++) {
				for(var x=0; x < this.obiskiDatumi.length - 1; x++) {
					var parts:any[] = this.obiskiDatumi[x].datumObiska.split('-');
					var prvi = parts[0]+parts[1]+parts[2];
					parts = this.obiskiDatumi[x+1].datumObiska.split('-');
					var drugi = parts[0]+parts[1]+parts[2];
					if(Number(prvi) > Number(drugi)) {
						var theGreater = this.obiskiDatumi[x];
						this.obiskiDatumi[x] = this.obiskiDatumi[x + 1]; 
						this.obiskiDatumi[x+1] = theGreater;
					}
				}
			}	
			this.obiskVrstaStoritve = this.delovniNalog.vrstaObiska.opis;
			
			
				
			
			//material če je prava vrsta obiska
			if(this.delovniNalog.vrstaObiska.idvrstaObiska == 60){
				j = 0;
				this.aliJeOdvzemKrvi = true;
				for(let i of this.delovniNalog.materials){
					let novMaterial = <any> ({'tipMateriala':'','kolicina':0});
					novMaterial.tipMateriala = i.opis;
					novMaterial.kolicina = this.delovniNalog.steviloEpruvet;
					this.material[j] = novMaterial;
					j = j+1;
				}
			}else if(this.delovniNalog.vrstaObiska.idvrstaObiska == 50){
				j = 0;
				
				this.aliJeInjekcija = true;
				this.obiskBolezen = this.delovniNalog.bolezen.opis;
				for(let i of this.delovniNalog.zdravilos){
					let novZdravilo = <any> ({'idZdravila':0,'tipZdravila':''});
					novZdravilo.idZdravila = i.idzdravilo;
					novZdravilo.tipZdravila = i.opis;
					
					this.zdravila[j] = novZdravilo;
					j = j+1;
				}
			}
			
		},
		err => {console.log(err);});
		
	}
}
