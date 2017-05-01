import { NgModule,Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { Router } from '@angular/router';

import {UserService} from "../prijava/user.service";

@Component({
	selector: 'odjava',
	template: `<div class='container'><h3>Uspešno ste se odjavili, preusmerjamo nazaj na glavno stran</h3></div>`
})

export class OdjavaComponent implements OnInit{
	constructor(private userService: UserService, private router:Router){}
	
	ngOnInit(){
		this.userService.logout();
		setTimeout(() => {
				this.router.navigate(['']);
			}, 2500);
	}
	
}