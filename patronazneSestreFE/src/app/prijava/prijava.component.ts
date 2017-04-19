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
	
    this.userService.login(this.model).subscribe(data => {this.person = data
			this.router.navigate(['/'+this.person.vloga.opis]);
	});
	
	
	
	/*localStorage.setItem('vloga',this.person.vloga.idvloga.toLocaleString());
	localStorage.setItem('username',this.person.email.toLocaleString());
	localStorage.setItem('password',this.person.geslo.toLocaleString());*/
	
	
    
   }
  
}

