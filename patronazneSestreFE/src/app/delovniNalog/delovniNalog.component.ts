import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

//class Pacients {
//	pacient :  Array<pacient>;
//}

class Pacient {
	idPacient : number;	
}

class Material {
	idMaterial : number;
}

class Zdravilo {
	idZdravilo : number;
}

class Bolezen {
	idBolezen : number;
}

class Storitev {
	idStoritev : number;
}



@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html'	
})

export class DelovniNalogComponent {


	
	
	constructor(private http: Http) {}
	
	
	
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
		
	data : any;	
	private restUrl = 'http://localhost:8080/patronazneSestre/v1/pacient/2';
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

		console.log(this.izbranoZdravilo.name);
		console.log(this.izbraniMaterial.name);
	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});

		this.http.get(this.restUrl, {headers: headers}).subscribe(data => { 
		
			this.data = data.json()
			var drek : string = JSON.stringify(this.data);						
			var test = JSON.parse(drek);

			this.stevilkaZdravstvenegaZavarovanja = test.stevilkaZdravstvenegaZavarovanja;
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
	
		//var p1 = new Pacient();
		//p1.idPacient = 85;		
		//var p2 = new Pacient();
		//p2.idPacient = 96;		
		//var p3 = new Pacients();		
		//p3.pacient = [p1, p2];		
		//var p4 = JSON.stringify(p3);		
		//console.log(p4);
		
		

		var pacient = new Pacient();
		pacient.idPacient = this.idPacient;
		
		var material = new Material();
		material.idMaterial = this.izbraniMaterial.id;


		
		
		//console.log(pacient.idPacient);
		
		console.log("Pacient: " + pacient.idPacient);
		console.log("Material: " + material.idMaterial);

				
		

	
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