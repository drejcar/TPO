/**
 * Created by Andrej on 7.4.2017.
 */
import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { Router } from '@angular/router'

@Component({
  selector: 'prijava',
  templateUrl: './prijava.component.html',
  //styleUrls: [ './prijava.component.css' ]
})

export class PrijavaComponent{
  constructor(
    private router:Router){}
  gotoPrijava(): void {
    this.router.navigate(['/prijava']);
  }
}
