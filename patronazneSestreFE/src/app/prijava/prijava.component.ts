import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { Router } from '@angular/router';
import { Prijava } from './prijava';
import {UserService} from "./user.service";
import { Upr } from "./upr"
import { Vlog } from "./upr"

@Component({
  selector: 'prijava',
  templateUrl: './prijava.component.html',
  styleUrls: [ './prijava.component.css' ]
})

export class PrijavaComponent{
	person: Upr;
	aliJeNapaka: boolean = false;
	
	textValue = "default";
  constructor(private userService: UserService,
    private router:Router){}
  gotoPrijava(): void {
    this.router.navigate(['/prijava']);
  }
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  mail='';
  pwd='';
  model=new Prijava(this.mail,this.pwd);
  
  onSubmit() {
	this.aliJeNapaka = false;
	
	
    this.userService.login(this.model).subscribe(data => {this.person = data
			
			localStorage.setItem('email',this.person.email.toString());
			localStorage.setItem('password',this.person.geslo.toString());
			localStorage.setItem('vloga',this.person.vloga.opis.toString());
			localStorage.setItem('datumZadnjePrijave',this.person.zadnjaPrijava.toString());
			localStorage.setItem('iduporabnik', this.person.iduporabnik.toString());
			localStorage.setItem('idvloga',this.person.vloga.idvloga.toString());
			
			console.log(localStorage['email']);
			console.log(localStorage['password']);
			console.log(localStorage['vloga']);
			console.log(localStorage['datumZadnjePrijave']);
			console.log("iduporabnik: "+localStorage['iduporabnik']);
			
			this.router.navigate(['/'+this.person.vloga.opis]);
	},
	err => {this.aliJeNapaka = true;
	
	});
	
	
	
	/*localStorage.setItem('vloga',this.person.vloga.idvloga.toLocaleString());
	localStorage.setItem('username',this.person.email.toLocaleString());
	localStorage.setItem('password',this.person.geslo.toLocaleString());*/
	
	
    
   }
  
}

