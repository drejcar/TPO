import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

class delovniNalog {
	izvajalecZdravstvenihStoritev : IzvajalecZdravstvenihStoritev;
	zdravstveniDelavec : ZdravstveniDelavec;
	pacients :  Array<Pacient>;
	vrstaObiska : Storitev;
	bolezen : Bolezen;
	materials : Array<Material>;
	zdravilos : Array<Zdravilo>;		
}

class IzvajalecZdravstvenihStoritev {
	idizvajalecZdravstvenihStoritev : number;
}

class ZdravstveniDelavec {
	idzdravstveniDelavec : number;
}
	
class Pacient {
	idpacient : number;	
}

class Material {
	idmaterial : number;
}

class Zdravilo {
	idzdravilo : number;
}

class Bolezen {
	idbolezen : number;
}

class Storitev {
	idvrsta_obiska : number;
}

@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html',
  styleUrls: [ './delovniNalog.component.css' ]
})

export class DelovniNalogComponent implements OnInit{	
	
	constructor(private http: Http) {}
	
	post: string = "";
	
	zdravila = [{'name': 'injekcija', 'id': 1}, {'name': 'injekcija1', 'id': 2}];
	izbranoZdravilo = this.zdravila[0];
	
	materiali = [{'name': 'Epruveta rdeča', 'id': 1}, {'name': 'Epruveta modra', 'id': 2}, {'name': 'Epruveta rumena', 'id': 3}, {'name': 'Epruveta zelena', 'id': 4}];
    izbraniMaterial = this.materiali[0];
	
	bolezni = [{'name': 'Viroza', 'id': 1}, {'name': 'Angina', 'id': 2}, {'name': 'Pljučnica', 'id': 2}];
	izbranaBolezen = this.bolezni[0];
	
	storitve = [{'name': 'Obisk nosečnice', 'id': 10}, {'name': 'Obisk otročnice', 'id': 20}, {'name': 'Obisk novorojenčka', 'id': 30}, {'name': 'Preventiva starostnika', 'id': 40},
	{'name': 'Aplikacija injekcije', 'id': 50}, {'name': 'Odvzem krvi', 'id': 60}, {'name': 'Kontrola zdravstvenega stanja', 'id': 70}];
		
    izbranaStoritev = this.storitve[0];
	
	veljavnostNalogaOd: string = "";
	veljavnostNalogaDo: string = "";
	veljavnostNalogaVrsta: string = "0";
	veljavnostNalogaFiksniDatum: boolean = false;
	veljavnostNalogaInterval: number;
	veljavnostNalogaSteviloObiskov: number = 1;
	
	data : any;	
	data1 : any;
	
	sifraUporabnika: string = "";
	urlParametri: string = "";
	
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';

	stevilkaIzvajalca : string = "stevilka izvajalca";
	nazivIzvajalca : string = "naziv izvajalca";
	stevilkaZdravnika : string = " stevilka zdravnika";
	idIzvajalca : number = -1;
	idZdravnika : number = -2;
	
	stevilkaZdravstvenegaZavarovanja : string = "";
	priimek : string = "";
	ime : string = "";
	ulica : string = "";
	postnaStevilka : string = "";
	kraj : string = "";
	telefonskaStevilka : string = "";
	email : string = "";
	idPacient : number = 15;

	ngOnInit() {	
	
		//ce ni zdravnik lahko opravlja samo preventivne obiske	
		
		if(localStorage['vloga'] != "Zdravnik") {
			this.storitve = [{'name': 'Obisk nosečnice', 'id': 10}, {'name': 'Obisk otročnice', 'id': 20}, {'name': 'Obisk novorojenčka', 'id': 30}, {'name': 'Preventiva starostnika', 'id': 40}];
			this.izbranaStoritev = this.storitve[0];
		}
			
		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
	
		console.log("iduporabnik: "+localStorage['iduporabnik']);
		console.log("vloga: "+localStorage['vloga']);
		
		//var idUporabnik = localStorage['iduporabnik'];		
		//console.log(`${this.restUrl}/zdravstveniDelavec/${idUporabnik}`);		
		//ko se robiju prikaže marija in porihta backend.
		//this.stevilkaIzvajalca =
		//this.nazivIzvajalca =
		//this.stevilkaZdravnika =
		//this.idIzvajalca = 
		//this,idZdravnika = 
				
	}
		 
	test(): void {	

		console.log("iduporabnik: "+localStorage['iduporabnik']);											   

		/* Napolnimo podatke o pacientu*/
	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
		
		//var post = "12345678911";
		

		
			
		this.http.get(`${this.restUrl}/pacient/zz/${this.post}`, {headers: headers}).subscribe(data => { 
		
			
			this.data = data.json()
			var drek : string = JSON.stringify(this.data);						
			var test = JSON.parse(drek);
			
			this.priimek = test.priimek;
			this.ime = test.ime;
			this.ulica = test.ulica;
			this.postnaStevilka = test.posta.idposta.toString();
			this.kraj = test.posta.opis;
			this.telefonskaStevilka = test.telefonskaStevilka;
			this.email = test.uporabnik.email;
			this.idPacient = test.idpacient;			
			
		});				
	
	}
	
	
	
	posljiDelovniNalog() {
	
	
		
		
		//console.log(`${this.restUrl}/zdravstveniDelavec/${idUporabnik}`);
		
		var fiksniDatum = 0;
		
		if(this.veljavnostNalogaFiksniDatum) fiksniDatum = 1;
			
		
		
		this.urlParametri = `?fiksniDatum=${fiksniDatum}&stObiskov=${this.veljavnostNalogaSteviloObiskov}&obdobje=${this.veljavnostNalogaVrsta}&interval=${this.veljavnostNalogaInterval}&od=${this.veljavnostNalogaOd}&do=${this.veljavnostNalogaDo}`
		//this.urlParametri = `${this.veljavnostNalogaOd} -> ${this.veljavnostNalogaDo} `;
		
		console.log(this.urlParametri);
	
		
		
	
	
	
		var headers1 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
	
		var pacient = new Pacient();
		pacient.idpacient = this.idPacient;
						
		var material = new Material();
		material.idmaterial = this.izbraniMaterial.id;
		
		var zdravilo = new Zdravilo();
		zdravilo.idzdravilo = this.izbranoZdravilo.id;
		
		var bolezen = new Bolezen();
		bolezen.idbolezen = this.izbranaBolezen.id;
		
		var storitev = new Storitev();
		storitev.idvrsta_obiska = this.izbranaStoritev.id;
		
		var izvajalecZdravstvenihStoritev = new IzvajalecZdravstvenihStoritev();
		izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev = this.idIzvajalca;
		
		var zdravstveniDelavec = new ZdravstveniDelavec();
		zdravstveniDelavec.idzdravstveniDelavec = this.idZdravnika;
		

		var dn = new delovniNalog();
		dn.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
		dn.zdravstveniDelavec = zdravstveniDelavec;
		dn.pacients = [pacient];
		dn.vrstaObiska = storitev;
		dn.bolezen = bolezen;
		dn.materials = [material];
		dn.zdravilos = [zdravilo];		
		
		/* veljavnost naloga */
		// v spremenljivkah, pošiljamo v urlju		
		
		

		
		
		var p4 = JSON.stringify(dn);
		console.log(dn);		
		console.log(p4);

		//var dnJSON = JSON.stringify(dn);
		//console.log(this.restUrl);
		this.http.post(`${this.restUrl}/delovniNalog`,JSON.stringify(dn), {headers: headers1});
				
		//dodaj še /${this.urlParametri}	
				
	}
	
}

//var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
		//this.http.get(this.restUrl, {headers: headers}).map(res => res.json()).subscribe(data => this.data = data);
		
		//this.http.get(this.restUrl).map(res => res.json()).subscribe(data => this.data = data);

//this.textValue = this.data;
		
		//console.log("jajc")

		//console.log(this.data);
		
		//let obj : MyObj = JSON.parse('{"userId" : " 10 " }');
		
		//let obj : MyObj = JSON.parse('{"userId" : " 10 " }');
		//console.log(obj.userId);
		
		/* 
			veljavnostNalogaOd: string = "";
			veljavnostNalogaDo: string = "";
			veljavnostNalogaVrsta: string = "0";
			veljavnostNalogaFiksniDatum: boolean = false;
			veljavnostNalogaInterval: number;
			veljavnostNalogaSteviloObiskov: number;		
			
			@QueryParam("fixniDatum") int fixniDatum,	//0 - da | 1 - ne
									@QueryParam("obdobje") int obdobje,			//0 - en obisk | 1 - vec obiskov
									@QueryParam("od") Date od,					//prvi obisk
									@QueryParam("do") Date doo,					//zakjucek obdobja obiskov
									@QueryParam("interval") int interval,		//interval obiskov --> razmik med obiski
									@QueryParam("stObiskov") int stObiskov)
			
		*/
		
		
		