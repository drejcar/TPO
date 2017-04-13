import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';
import { Router } from '@angular/router';
import { Prijava } from './prijava';
import {UserService} from "./user.service";

@Component({
  selector: 'prijava',
  templateUrl: './prijava.component.html',
  styleUrls: [ './prijava.component.css' ]
})

export class PrijavaComponent{
  constructor(private userService: UserService,
    private router:Router){}
  gotoPrijava(): void {
    this.router.navigate(['/prijava']);
  }
  gotoRegistracija(): void {
    this.router.navigate(['/registracija']);
  }
  mail='';
  pwd='';
  model=new Prijava(this.mail,this.pwd);
  /*onSubmit(email,password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }*/
}

