import { Component } from '@angular/core';
import {Http} from "@angular/http";
import { UserService } from './prijava/user.service'


@Component({
  selector: 'my-app',
  template: `

	  <header>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Domov</a>
			<a routerLink="/registracijazd" routerLinkActive="active">regZd</a>	
			<a routerLink="/spremembaGesla" routerLinkActive="active">sprGesla</a>	
		</nav>
						
		<div id="navRight">
			<a routerLink="/prijava" routerLinkActive="active">Prijava</a>
			/
			<a routerLink="/registracija" routerLinkActive="active">Registracija</a>
			/
			<a routerLink="/delovniNalog" routerLinkActive="active">DelovniNalog</a>

		</div>
	  </header>

	  
	  <router-outlet></router-outlet>
	  
	  <footer>@ 2017</footer>

  `,
	styleUrls: [ './app.component.css' ],

})
export class AppComponent  {
  private loggedIn = false;
  constructor(private http:Http ,private usr:UserService){
    this.loggedIn = !!localStorage.getItem('username');
  }
  name = 'Angular';
  log=this.usr.isLoggedIn()

}
