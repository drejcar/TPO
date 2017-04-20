import { Component } from '@angular/core';

@Component({
  selector:'zdravnik-dash',
  template: `<p>Prijavljeni ste kot zdravnik, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class ZdravnikDashComponent{
	constructor(){}
	neki: String = localStorage.getItem('datumZadnjePrijave')
	
}
