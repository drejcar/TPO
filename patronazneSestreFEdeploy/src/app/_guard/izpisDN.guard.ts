import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../prijava/user.service';

@Injectable()
export class IzpisDNGuard implements CanActivate {
  constructor(private router:Router,private user: UserService) {}

  canActivate() {
    if((localStorage.getItem('vloga') == 'Zdravnik') || (localStorage.getItem('vloga') == 'PatronaznaSestra') || (localStorage.getItem('vloga') == 'PatronaznaSluzba')){
		return true;
	}else{
		this.router.navigate(['**']);
		return false;
	}
  }

}