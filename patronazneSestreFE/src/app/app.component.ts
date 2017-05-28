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
			<a [hidden]="!admin" routerLink="/registracijazd" routerLinkActive="active">regZd</a>	
			<a [hidden]="!aliJeLoginan" routerLink="/spremembaGesla" routerLinkActive="active">sprGesla</a>	
			<a [hidden]="!mojiDelovniNalog" routerLink="/seznamObiskov" routerLinkActive="active">Seznam obiskov</a>
			<a [hidden]="!patronaznaSestra" routerLink="/planiranjeObiskov" routerLinkActive="active">Planiranje obiskov</a>
			<a [hidden]="!aliJePacient" routerLink="/uporabniskiProfil" routerLinkActive="active">Moj profil</a>
			<a [hidden]="!patronaznaSluzba" routerLink="/nadomescanje" routerLinkActive="active">Nadomescanje</a>
		</nav>
		<div id="userProf">{{opis}}</div>
		<div id="zadnjaPrijava">{{opis2}}</div>
		<div id="navRight">
			<a routerLink="/{{prjava2}}" routerLinkActive="active">{{prjava}}</a>
			<a [hidden]="!aliJePacient" routerLink="/seznamObiskovPacient" routerLinkActive="active">/ Moji obiski</a>
			<a [hidden]="aliJeLoginan"routerLink="/registracija" routerLinkActive="active">/ Registracija</a>
			<a [hidden]="!dovoljenjeKreirat" routerLink="/delovniNalog" routerLinkActive="active">/ DelovniNalog</a>
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
  admin: boolean = false;
  patronaznaSestra: boolean = false;
  dovoljenjeKreirat: boolean = false;
  patronaznaSluzba: boolean = false;
  aliJeLoginan: boolean = false;
  aliJePacient: boolean = false;
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
		// dovoljenja in kaj se lahko prikaze
		if(this.vloga != 'guest'){
			this.email = localStorage.getItem('email');
			this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
			this.opis = this.email;
			this.opis2 = "Zadnja prijava: "+this.datumZadnjePrijave;
			this.prjava = 'Odjava';
			this.prjava2 = 'odjava';
			this.aliJeLoginan = true;
		}else{
			this.admin = false;
			this.patronaznaSestra=false;
			this.patronaznaSluzba = false;
			this.dovoljenjeKreirat = false;
			this.opis = '';
			this.opis2 = '';
			this.prjava = 'Prijava';
			this.prjava2 = 'prijava';
			this.aliJeLoginan = false;
			this.aliJePacient = false;
		}
		//kaj se prikaze glede na vlogo
		if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba'){
			this.mojiDelovniNalog = true;
			if(this.vloga =='PatronaznaSestra'){
				this.patronaznaSestra=true;
			}
		}if(this.vloga == 'Administrator'){
			this.admin = true;
		}if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSluzba'){
			this.dovoljenjeKreirat = true;
		}
		if(this.vloga == 'Pacient'){
			this.aliJePacient = true;
		}
		if(this.vloga == 'PatronaznaSluzba'){
			this.patronaznaSluzba = true;
		}

	  }
  }
  //zato da lahko klicem iz drugje
  change(){
	  if(localStorage.getItem('vloga') != null){
		this.vloga = localStorage.getItem('vloga');
		// dovoljenja in kaj se lahko prikaze
		if(this.vloga != 'guest'){
			this.email = localStorage.getItem('email');
			this.datumZadnjePrijave = localStorage.getItem('datumZadnjePrijave');
			this.opis = this.email;
			this.opis2 = "Zadnja prijava: "+this.datumZadnjePrijave;
			this.prjava = 'Odjava';
			this.prjava2 = 'odjava';
			this.aliJeLoginan = true;
		}else{
			this.patronaznaSluzba = false;
			this.aliJePacient = false;
			this.dovoljenjeKreirat = false;
			this.opis = '';
			this.opis2 = '';
			this.prjava = 'Prijava';
			this.prjava2 = 'prijava';
			this.mojiDelovniNalog = false;
			this.admin = false;
			this.patronaznaSestra=false;
			this.aliJeLoginan = false;
		}
		
		//kaj se prikaze glede na vlogo
		if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSestra' || this.vloga == 'PatronaznaSluzba'){
			this.mojiDelovniNalog = true;
			if(this.vloga =='PatronaznaSestra'){
				this.patronaznaSestra=true;
			}
		}if(this.vloga == 'Administrator'){
			this.admin = true;
		}if(this.vloga == 'Zdravnik' || this.vloga == 'PatronaznaSluzba'){
			this.dovoljenjeKreirat = true;
		}
		if(this.vloga == 'Pacient'){
			this.aliJePacient = true;
		}
		if(this.vloga == 'PatronaznaSluzba'){
			this.patronaznaSluzba = true;
		}
	  }
  }
}
