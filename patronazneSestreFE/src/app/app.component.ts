import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  
	  <header>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Domov</a>				
		</nav>
						
		<div id="navRight">
			<a routerLink="/prijava" routerLinkActive="active">Prijava</a>	
			/
			<a routerLink="/registracija" routerLinkActive="active">Registracija</a>
		</div>
	  </header>
	  
	  <!-- <h1>Hello motherfucking {{name}}</h1> -->
	  
	  <router-outlet></router-outlet>
	  
	  <footer>@ 2017</footer>
  `,
	styleUrls: [ './app.component.css' ]
})
export class AppComponent  { name = 'Angular'; }
