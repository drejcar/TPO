import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../prijava/user.service';

@Injectable()
export class DelovniNalogGuard implements CanActivate {
  constructor(private router:Router,private user: UserService) {}

  canActivate() {
    if(localStorage.getItem('vloga') == 'Zdravnik' || localStorage.getItem('vloga') == 'PatronaznaSestra'){
		return true;
	}else{
		this.router.navigate(['**']);
		return false;
	}
  }

}