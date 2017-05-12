import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector:'zdravnik-dash',
  template: `<p>Prijavljeni ste kot zdravnik, datum zadnje prijave: {{neki}}</p>
              `
})
export class ZdravnikDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem('datumZadnjePrijave')
	
	ngOnInit(){
	  this.appcmp.change();
	  
  }
}
