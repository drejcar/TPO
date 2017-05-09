import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector:'pacient-dash',
  template: `<p>Prijavljeni ste kot pacient, datum zadnje prijave: {{neki}}</p>
              `

})
export class PacientDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
	ngOnInit(){
	  this.appcmp.change();

  }
}
