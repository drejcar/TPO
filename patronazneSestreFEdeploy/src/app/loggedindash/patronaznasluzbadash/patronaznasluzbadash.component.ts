import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector:'patronaznasluzba-dash',
  template: `<p>Prijavljeni ste kot vodja patronažne službe, datum zadnje prijave: {{neki}}</p>
              `
})
export class PatronaznaSluzbaDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
	ngOnInit(){
	  this.appcmp.change();
	  
  }
}
