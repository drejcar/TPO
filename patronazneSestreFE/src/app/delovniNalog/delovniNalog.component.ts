import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html'	
})


 
 


export class DelovniNalogComponent {


	
	
	constructor(private http: Http) {}
	
	data : any;
	ulica : any;
	testing : any;
	private restUrl = 'http://localhost:8080/patronazneSestre/v1/pacient/3';
	//private restUrl = 'http://jsonplaceholder.typicode.com/posts/1';	

	
	 
	test(): void {	
	
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});

		this.http.get(this.restUrl, {headers: headers}).subscribe(data => this.data = data.json());
		
		setTimeout(() => {			
			var drek : string = JSON.stringify(this.data);
			//let obj : MyObj = JSON.parse(drek);			

			this.testing = JSON.parse(drek);
			
			
			
			//this.ulica = testing.ulica;			
			//console.log(this.testing.hisnaStevilka);
			
		}, 1000);			
	
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