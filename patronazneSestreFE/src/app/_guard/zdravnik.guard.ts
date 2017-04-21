import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../prijava/user.service';

@Injectable()
export class ZdravnikGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate() {
    return (this.user.isLoggedIn() && localStorage.getItem("vloga")=="Zdravnik");
  }
}
