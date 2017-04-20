import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

class delovniNalog {
	pacients :  Array<Pacient>;
	vrstaObiska : Storitev;
	bolezen : Bolezen;
	materials : Array<Material>;
	zdravilos : Array<Zdravilo>;		
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

export class DelovniNalogComponent {	
	
	constructor(private http: Http) {}
	
	post: string = "";
	
	zdravila = [{'name': 'injekcija', 'id': 1}, {'name': 'injekcija1', 'id': 2}];
	izbranoZdravilo = this.zdravila[0];
	
	//cities = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
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
	veljavnostNalogaSteviloObiskov: number;
	
	data : any;	
	private restUrl = 'http://localhost:8080/patronazneSestre/v1';
	//private restUrl = 'http://jsonplaceholder.typicode.com/posts/1';	

	stevilkaZdravstvenegaZavarovanja : string = "";
	priimek : string = "";
	ime : string = "";
	ulica : string = "";
	postnaStevilka : string = "";
	kraj : string = "";
	telefonskaStevilka : string = "";
	email : string = "";
	idPacient : number = 15;		
		 
	test(): void {		
	
		//console.log(this.veljavnostNalogaOd);
		//console.log(this.veljavnostNalogaDo);
		//console.log(this.veljavnostNalogaVrsta);
		//console.log(this.veljavnostNalogaFiksniDatum);
		//console.log("Interval: " + this.veljavnostNalogaInterval);
		//console.log("Stevilo obiskov: " + this.veljavnostNalogaSteviloObiskov);
											   

		/* Napolnimo podatke o pacientu*/
	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});
		
		//var post = "12345678911";
		
		//console.log(this.post);
		
			
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

		var dn = new delovniNalog();
		dn.pacients = [pacient];
		dn.vrstaObiska = storitev;
		dn.bolezen = bolezen;
		dn.materials = [material];
		dn.zdravilos = [zdravilo];		
		
		/* veljavnost naloga */
		// v spremenljivkah, pošiljamo v urlju		
		
		

		
		
		//var p4 = JSON.stringify(dn);
		//console.log(dn);		
		//console.log(p4);

		//var dnJSON = JSON.stringify(dn);
		console.log(restUrl);
		this.http.post(`${this.restUrl}/delovniNalog`,JSON.stringify(dn), {headers: this.headers});
		
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