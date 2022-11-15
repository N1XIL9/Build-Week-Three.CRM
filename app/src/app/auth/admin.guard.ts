import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor (private authservice:ServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.authservice.isRoleAdmin();
  }

}
