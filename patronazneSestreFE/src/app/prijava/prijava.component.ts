import { NgModule,Component, OnInit } from '@angular/core';
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

export class PrijavaComponent implements OnInit{
	person: Upr;
	aliJeNapaka: boolean = false;
	aliSeLahkoLogina: boolean = true;
	textValue = "default";
	steviloMinut: number = 5;
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
			this.router.navigate(['/'+this.person.vloga.opis]);
	},
	err => {this.aliJeNapaka = true;

			if(localStorage.getItem('attempts') === null){
				localStorage.setItem('attempts','1');
			}else{
				var trenutn = localStorage.getItem('attempts');
				var stevilo = Number(trenutn)+1;
				localStorage.setItem('attempts', stevilo.toString());
				
				if(stevilo >= 3){
					
					this.aliSeLahkoLogina = false;
					var d = new Date();
					var hours = d.getHours();
					var minutes = d.getMinutes();
					
					if(Number(minutes) < 10){
						var noveminutes = '0'+minutes.toString();
						minutes = Number(noveminutes);
					}
					
					
					var cajt = hours.toString()+minutes.toString();
					
					localStorage.setItem('neSme',cajt.toString());
					
					
					localStorage.removeItem('attempts');
				}
			}

	});
	
	
	
	/*localStorage.setItem('vloga',this.person.vloga.idvloga.toLocaleString());
	localStorage.setItem('username',this.person.email.toLocaleString());
	localStorage.setItem('password',this.person.geslo.toLocaleString());*/
	
	
    
   }
   //vse tukaj je za lockanje uporabnika
   ngOnInit(){
	   
	   if(localStorage.getItem('neSme') != null){
		   
		   var d = new Date();
		   var hours = d.getHours();
		   var minutes = d.getMinutes();
		   var cas = localStorage.getItem('neSme');
		   	
		   
		   
		   if(Number(minutes) < 10){
			   var noveminutes = '0'+minutes.toString();
				minutes = Number(noveminutes)
			}
			
			var trenutniCas = hours.toString()+minutes.toString();
			
			
		   
		   if(Number(trenutniCas)-Number(cas) >= 5){ 
				localStorage.removeItem('neSme');
				this.aliSeLahkoLogina = true;
				
		   }else{
			   
			   this.steviloMinut = 5-(Number(trenutniCas)-Number(cas));
			   this.aliSeLahkoLogina = false;
		   }
	   
		   
	   }
   }
  
}

