import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html'	
})




 
 


export class DelovniNalogComponent {

	//polja to be filled
	
	
	//stevilkaZdravstvenegaZavarovanja = "default";
	
	//var drekec = "asda";
	
	constructor(private http: Http) {}
	
	data : any;
	//ulica : any;
	//testing : Object;
	private restUrl = 'http://localhost:8080/patronazneSestre/v1/pacient/3';
	//private restUrl = 'http://jsonplaceholder.typicode.com/posts/1';	

	
	 
	test(): void {	
	
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
			
			//console.log(test.posta.idposta);

		
		});
		
		//setTimeout(() => {			
			//var drek : string = JSON.stringify(this.data);
			//let obj : MyObj = JSON.parse(drek);			

			//this.testing = JSON.parse(drek);
			
			
			
			//this.ulica = testing.ulica;			
			//console.log(drek);
			
		//}, 1000);			
	
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