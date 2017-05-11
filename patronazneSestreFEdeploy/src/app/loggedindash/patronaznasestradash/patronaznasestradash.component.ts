import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector:'patronaznasestra-dash',
  template: `<p>Prijavljeni ste kot patronažna sestra, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class PatronaznaSestraDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
	ngOnInit(){
	  
	
	  this.appcmp.change();
	  
  }
}
