import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { UserService } from './prijava/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  template: `

	  <header>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Domov</a>
			<a routerLink="/registracijazd" routerLinkActive="active">regZd</a>	
			<a routerLink="/spremembaGesla" routerLinkActive="active">sprGesla</a>	
		</nav>
		<div>hello</div>				
		<div id="navRight">
			<a routerLink="/{{prjava2}}" routerLinkActive="active">{{prjava}}</a>
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
export class AppComponent implements OnInit {
  private loggedIn = false;
  constructor(private http:Http ,private usr:UserService){
    
  }
  prjava: String = 'Prijava';
  vloga: String='';
  prjava2: String = 'prijava';
  
  name = 'Angular';
  log=this.usr.isLoggedIn()
  ngOnInit(){
	  if(localStorage.getItem('vloga') != null){
		this.vloga = localStorage.getItem('vloga');
		console.log(this.vloga);
		if(this.vloga != 'guest'){
			this.prjava = 'Odjava';
			this.prjava2 = 'odjava';
		}
	  }
  }
}
