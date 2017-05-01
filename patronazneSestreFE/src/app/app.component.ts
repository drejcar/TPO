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
		<div id="userProf">{{opis}}</div>
		<div id="zadnjaPrijava">{{opis2}}</div>
		<div id="navRight">
			<a routerLink="/{{prjava2}}" routerLinkActive="active">{{prjava}}</a>
			/
			<a routerLink="/registracija" routerLinkActive="active">Registracija</a>
			/
			<a routerLink="/delovniNalog" routerLinkActive="active">DelovniNalog</a>
			<a [hidden]="!mojiDelovniNalog" routerLink ="/delovniNalogi" routerLinkActive="active">/ Moji delovni nalogi</a>
		</div>
	  </header>
	  <router-outlet></router-outlet>
	  
	  <footer>@ 2017</footer>

  `,
	styleUrls: [ './app.component.css' ],
	
})
export class AppComponent implements OnInit {
  private loggedIn = false;
  mojiDelovniNalog: boolean = false;
  constructor(private http:Http ,private usr:UserService){
    
  }
  opis: String = '';
  opis2: String = '';
  prjava: String = 'Prijava';
  vloga: String='';
  prjava2: String = 'prijava';
  email: String = '';
  datumZadnjePrijave: String = '';
  
  name = 'Angular';
  log=this.usr.isLoggedIn()
  ngOnInit(){
	  if(localStorage.getItem('vloga') != null){
		this.vloga = localStorage.getItem('vloga');
		
		if(this.vloga != 'guest'){
			this.email = localStorage.getItem('email');
			this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
			this.opis = this.email;
			this.opis2 = "Zadnja prijava: "+this.datumZadnjePrijave;
			this.prjava = 'Odjava';
			this.prjava2 = 'odjava';
		}else{
			this.opis = '';
			this.opis2 = '';
			this.prjava = 'Prijava';
			this.prjava2 = 'prijava';
		}
		if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba'){
			this.mojiDelovniNalog = true;
		}
		
	  }
  }
  //zato da lahko klicem iz drugje
  change(){
	  if(localStorage.getItem('vloga') != null){
		this.vloga = localStorage.getItem('vloga');
		
		if(this.vloga != 'guest'){
			this.email = localStorage.getItem('email');
			this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
			this.opis = this.email;
			this.opis2 = "Zadnja prijava: "+this.datumZadnjePrijave;
			this.prjava = 'Odjava';
			this.prjava2 = 'odjava';
		}else{
			this.opis = '';
			this.opis2 = '';
			this.prjava = 'Prijava';
			this.prjava2 = 'prijava';
			this.mojiDelovniNalog = false;
		}
		if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba'){
			this.mojiDelovniNalog = true;
		}
	  }
  }
}
