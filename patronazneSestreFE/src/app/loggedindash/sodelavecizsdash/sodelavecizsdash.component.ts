import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector:'sodelavecizs-dash',
  template: `<p>Prijavljeni ste kot sodelavecIZS, datum zadnje prijave: {{neki}}</p>
              `
})
export class SodelavecIzsDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
	ngOnInit(){
	  this.appcmp.change();

  }
}
