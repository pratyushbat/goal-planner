import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {  
    constructor( public router: Router) {}  canActivate(): boolean {
    const localData=localStorage.getItem('goalUser');
    if(!localData){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}