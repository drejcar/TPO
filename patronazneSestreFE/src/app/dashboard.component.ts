/**
 * Created by Andrej on 7.4.2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Sestra } from './sestra';
//import { SestraService } from './sestra.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
  //styleUrls: [ './dashboard.component.css' ]

})
export class DashboardComponent {
  constructor(
    private router:Router){}
  gotoPrijava(): void {
    this.router.navigate(['/prijava']);
  }
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  /*
  sestre: Sestra[] = [];

  constructor(private sestraService: SestraService) { }

  ngOnInit(): void {
    //noinspection TypeScriptUnresolvedFunction
    this.sestraService.getSestre()
      .then(sestre => this.sestre = sestre.slice(1, 5));
  }*/
}
