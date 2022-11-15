import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:ServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }


}
