
// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../prijava/user.service';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate() {
    return (localStorage.getItem('vloga')=='guest');
  }
}
