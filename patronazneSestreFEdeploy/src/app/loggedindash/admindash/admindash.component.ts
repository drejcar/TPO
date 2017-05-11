import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector:'admin-dash',
  template: `<p>Prijavljeni ste kot administrator, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class AdminDashComponent implements OnInit{
	constructor(private appcmp: AppComponent){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
	ngOnInit(){
	  this.appcmp.change();
	  
  }
}
