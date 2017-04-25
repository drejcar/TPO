import { Component } from '@angular/core';

@Component({
  selector:'patronaznasestra-dash',
  template: `<p>Prijavljeni ste kot patronažna sestra, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class PatronaznaSestraDashComponent{
	constructor(){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
}
