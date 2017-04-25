import { Component } from '@angular/core';

@Component({
  selector:'sodelavecizs-dash',
  template: `<p>Prijavljeni ste kot sodelavecIZS, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class SodelavecIzsDashComponent{
	constructor(){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
}
