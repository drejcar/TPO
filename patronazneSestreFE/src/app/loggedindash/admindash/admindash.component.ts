import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector:'admin-dash',
  template: `<p>Prijavljeni ste kot administrator, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class AdminDashComponent{
	constructor(){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];

}
