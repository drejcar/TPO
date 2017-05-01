import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'delovniNalogi',
	templateUrl: './izpisDelovnihNalogov.component.html',
	styleUrls: [ './izpisDelovnihNalogov.component.css' ]
})

export class izpisDelovnihNalogovComponent implements OnInit{
	constructor(private router:Router){}
	
	ngOnInit(){
			
		
	}
}