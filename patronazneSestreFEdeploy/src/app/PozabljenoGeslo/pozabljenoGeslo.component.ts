import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { izpisDNService } from '../izpisDelovnihNalogov/izpisDN.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pozabljenoGeslo',
  templateUrl: './pozabljenoGeslo.component.html',
  styleUrls: ['./pozabljenoGeslo.component.css']
})
export class PozabljenoGesloComponent{
	private restUrl = 'http://rogla.fri1.uni-lj.si/rest/patronazneSestre/v1';
	constructor(private router:Router, private http: Http, private DNService: izpisDNService){}
	mail='';
	mail2='';
	model = ({'mail': this.mail, 'mail2': this.mail2});
	submitted:boolean = false;
	onSubmit(){
		var headers = new Headers({'Content-Type': 'application/json'});
		this.http.post(`${this.restUrl}/uporabnik/pozabuGeslo/${this.model.mail}`,{headers: headers}).subscribe(res => {
			this.submitted = true;

		});
	}
}
