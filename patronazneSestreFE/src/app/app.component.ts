import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  <h1>Hello motherfucking {{name}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Domov</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
