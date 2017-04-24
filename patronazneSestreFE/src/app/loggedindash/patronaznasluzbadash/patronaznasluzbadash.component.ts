import { Component } from '@angular/core';

@Component({
  selector:'patronaznasluzba-dash',
  template: `<p>Prijavljeni ste kot vodja patronažne službe, datum zadnje prijave: {{neki}}</p>
              `,
  styleUrls:[]
})
export class PatronaznaSluzbaDashComponent{
	constructor(){}
	neki: String = localStorage.getItem['datumZadnjePrijave'];
}
