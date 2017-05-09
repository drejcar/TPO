import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
	selector: 'uspeh',
	template: `<h3>Uspešno ste kreirali delovni nalog!<h3>`,
})

export class preusmeriComponent implements OnInit {
	constructor(private router:Router){}
	
	
	ngOnInit(){
		setTimeout(() => {
				this.router.navigate(['/delovniNalog']);
			}, 2000);
	
	}
}