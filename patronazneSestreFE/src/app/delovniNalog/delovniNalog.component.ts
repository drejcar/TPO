import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'delovniNalog',
  templateUrl: './delovniNalog.component.html'

})
export class DelovniNalogComponent {
	
	constructor(private http: Http) {}
	
	textValue = "default";
	
	private restUrl = 'http://localhost:8080/patronazneSestre/v1/pacient';
	//private restUrl = 'http://jsonplaceholder.typicode.com/posts/1';	

	
	data : Object;
	

	
	test(): void {
		
		//let headers: Headers = new Headers();
		
		var headers = new Headers({'Content-Type': 'application/json','Authorization':'Basic ' + btoa('admin@gmail.com:admin')});

		
		this.http.get(this.restUrl, {headers: headers}).map(res => res.json()).subscribe(data => this.data = data);

		this.textValue = JSON.stringify(this.data);

	
	}
	


}