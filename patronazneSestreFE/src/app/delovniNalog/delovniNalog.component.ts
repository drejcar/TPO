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
	idvrstaObiska : number;
}

@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html',
  styleUrls: [ './delovniNalog.component.css' ]
})

export class DelovniNalogComponent implements OnInit{	
	
	constructor(private http: Http) {}
	
	post: string = "";
	post1: string = "";
	
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
	veljavnostNalogaVrsta: number = 0;
	veljavnostNalogaFiksniDatum: boolean = false;
	veljavnostNalogaInterval: number = 0;
	veljavnostNalogaSteviloObiskov: number = 1;
	
	data : any;	
	data1 : any;
	data2 : any;
	
	sifraUporabnika: string = "";
	urlParametri: string = "";
	
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';

	stevilkaIzvajalca : string = "rest ocitno ni uspel";
	nazivIzvajalca : string = "naziv izvajalca";
	
	stevilkaZdravstvenegaDelavca : string = "rest ocitno ni uspel";
	idIzvajalca : number = -1;
	idZdravnika : number = -1;
	
	stevilkaZdravstvenegaZavarovanja : string = "";
	priimek : string = "";
	ime : string = "";
	ulica : string = "";
	hisnaStevilka : string = "";
	postnaStevilka : string = "";
	kraj : string = "";
	telefonskaStevilka : string = "";
	email : string = "";
	idPacient : number = -1;
	idPacient1 : number = -1;
	
	stevilkaZdravstvenegaZavarovanja1 : string = "";
	priimek1 : string = "";
	ime1 : string = "";
	ulica1 : string = "";
	hisnaStevilka1 : string = "";
	postnaStevilka1 : string = "";
	kraj1 : string = "";
	telefonskaStevilka1 : string = "";
	email1 : string = "";
	

	ngOnInit() {

		
	
		//ce ni zdravnik lahko opravlja samo preventivne obiske			
		if(localStorage['vloga'] != "Zdravnik") {
			this.storitve = [{'name': 'Obisk nosečnice', 'id': 10}, {'name': 'Obisk otročnice', 'id': 20}, {'name': 'Obisk novorojenčka', 'id': 30}, {'name': 'Preventiva starostnika', 'id': 40}];
			this.izbranaStoritev = this.storitve[0];
		}
			
		var headers3 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
	
		this.http.get(`${this.restUrl}/zdravstveniDelavec/${localStorage['iduporabnik']}`, {headers: headers3}).subscribe(data1 => { 
					
			this.data1 = data1.json();					
			var drek1 : string = JSON.stringify(this.data1);					
			var test1 = JSON.parse(drek1);
			var lalala : string = test1.ime;			
			console.log("a dobim kej vn ? : " + lalala);
						
			this.stevilkaZdravstvenegaDelavca = test1.sifra;	
			this.stevilkaIzvajalca = test1.izvajalecZdravstvenihStoritev.stevilkaIzvajalca;
			this.nazivIzvajalca = test1.izvajalecZdravstvenihStoritev.naziv;
			this.idIzvajalca = test1.izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev;
			this.idZdravnika = test1.idzdravstveniDelavec;
			
		});			
		
						
	}
		 
	pridobiPodatkePacienta(): void {	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});		
			
		this.http.get(`${this.restUrl}/pacient/zz/${this.post}`, {headers: headers}).subscribe(data => { 		
			
			this.data = data.json()
			var drek : string = JSON.stringify(this.data);						
			var test = JSON.parse(drek);
			
			this.priimek = test.priimek;
			this.ime = test.ime;
			this.ulica = test.ulica;
			this.hisnaStevilka = test.hisnaStevilka;
			this.postnaStevilka = test.posta.idposta.toString();
			this.kraj = test.posta.opis;
			this.telefonskaStevilka = test.telefonskaStevilka;
			this.email = test.uporabnik.email;
			this.idPacient = test.idpacient;			
			
		},
		(err) => {console.log(err);});		
	
	}	
	
	pridobiPodatkePacienta1(): void {	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});		
			
		this.http.get(`${this.restUrl}/pacient/zz/${this.post1}`, {headers: headers}).subscribe(data2 => { 		
			
			this.data2 = data2.json()
			var drek1 : string = JSON.stringify(this.data2);						
			var test1 = JSON.parse(drek1);
			
			this.priimek1 = test1.priimek;
			this.ime1 = test1.ime;
			this.ulica1 = test1.ulica;
			this.hisnaStevilka1 = test1.hisnaStevilka;			
			this.postnaStevilka1 = test1.posta.idposta.toString();
			this.kraj1 = test1.posta.opis;
			this.telefonskaStevilka1 = test1.telefonskaStevilka;
			this.email1 = test1.uporabnik.email;
			this.idPacient1 = test1.idpacient;			
			
		},
		(err) => {console.log(err);});		
	
	}
	
	posljiDelovniNalog() {
	
		console.log("veljavnost delovnega naloga vrsta: " + this.veljavnostNalogaVrsta);
		
		
		//console.log(`${this.restUrl}/zdravstveniDelavec/${idUporabnik}`);
		
		var fiksniDatum = 0;
		
		if(this.veljavnostNalogaFiksniDatum) fiksniDatum = 1;
			
		
		
		this.urlParametri = `?fiksniDatum=${fiksniDatum}&stObiskov=${this.veljavnostNalogaSteviloObiskov}&obdobje=${this.veljavnostNalogaVrsta}&interval=${this.veljavnostNalogaInterval}&od=${this.veljavnostNalogaOd}&do=${this.veljavnostNalogaDo}`
		//this.urlParametri = `${this.veljavnostNalogaOd} -> ${this.veljavnostNalogaDo} `;
		
		console.log(this.urlParametri);
	
		
		
	
	
	
		var headers1 = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
	
		var pacient = new Pacient();
		pacient.idpacient = this.idPacient;
		
		var pacient1 = new Pacient();
		pacient1.idpacient = this.idPacient1;
						
		var material = new Material();
		material.idmaterial = this.izbraniMaterial.id;
		
		var zdravilo = new Zdravilo();
		zdravilo.idzdravilo = this.izbranoZdravilo.id;
		
		var bolezen = new Bolezen();
		bolezen.idbolezen = this.izbranaBolezen.id;
		
		var storitev = new Storitev();
		storitev.idvrstaObiska = this.izbranaStoritev.id;
		
		var izvajalecZdravstvenihStoritev = new IzvajalecZdravstvenihStoritev();
		izvajalecZdravstvenihStoritev.idizvajalecZdravstvenihStoritev = this.idIzvajalca;
		
		var zdravstveniDelavec = new ZdravstveniDelavec();
		zdravstveniDelavec.idzdravstveniDelavec = this.idZdravnika;
		

		var dn = new delovniNalog();
		dn.izvajalecZdravstvenihStoritev = izvajalecZdravstvenihStoritev;
		dn.zdravstveniDelavec = zdravstveniDelavec;
		
		//nekaj ga zjebe ce sta 2 objekta.
		//if(this.izbranaStoritev.id == 20 || this.izbranaStoritev.id == 30) {
		//	dn.pacients = [pacient, pacient];
		//} else 
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
		
		console.log("pacient ali pacienta: " + dn.pacients)

		//var dnJSON = JSON.stringify(dn);
		//console.log(this.restUrl);
		this.http.post(`${this.restUrl}/delovniNalog`,JSON.stringify(dn), {headers: headers1}).subscribe(
			res => {console.log(res);}, 
			(err) => {console.log(err);}
		);
		
		//;
		//return this.http.post(`${this.baseUrl}/registracija`,JSON.stringify(pacient), {headers: this.headers});		
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
		
		
		