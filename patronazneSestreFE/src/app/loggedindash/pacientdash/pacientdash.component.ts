import { Component } from '@angular/core';

@Component({
  selector:'pacient-dash',
  template: `<p>Prijavljeni ste kot pacient, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class PacientDashComponent{
	constructor(){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
}
