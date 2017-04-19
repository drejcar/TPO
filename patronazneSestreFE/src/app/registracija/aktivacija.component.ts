import { Component, OnInit } from '@angular/core';
import { Uporabnik } from '../uporabnik';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import { UporabnikService} from './uporabnik.service';
import { Spol } from '../Pacient';
import { Posta } from '../Pacient';
import { Okolis } from '../Pacient';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'aktivacija',
  templateUrl: './aktivacija.component.html',
  styleUrls: [ './registracija.component.css' ]
})

export class AktivacijaComponent implements OnInit{
	constructor(private router:Router,private uporabnikService:UporabnikService,private route: ActivatedRoute,
  private location: Location){}
aliJeReg: boolean= false;
aliNiReg: boolean=false;

ngOnInit(){
	this.route.params
    .switchMap((params: Params) => this.uporabnikService.aktivirajRacun(Number(+params['id']))).subscribe(response => {
			this.aliJeReg=true;
			setTimeout(() => {
				this.router.navigate(['/prijava']);
			}, 2500);
	},
	err => {
		this.aliNiReg=true;
	});
	
}

}