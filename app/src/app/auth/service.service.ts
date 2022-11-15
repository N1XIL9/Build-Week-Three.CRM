import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './Users';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  isLoggedIn = false;
  isAdmin = true;
  // (false di isAdmin non si apre la pagina)

  constructor(private http: HttpClient) {}

  signup(obj: Users) {
    return this.http.post(environment.urlAPI + 'signup', obj);
  }

  login(obj: Users) {
    return this.http.post(environment.urlAPI + 'login', obj);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  getUsers() {
    return this.http.get<Users[]>(environment.urlAPI + 'users');
  }

  getUserDetails(id: number) {
    return this.http.get<Users>(environment.urlAPI + 'users/' + id);
  }
}
