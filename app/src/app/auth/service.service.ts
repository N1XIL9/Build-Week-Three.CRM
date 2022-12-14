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

  changeRole(id: number, data: Partial<Users>) {
    return this.http.patch<any>(environment.urlAPI + 'users/' + id, data);
  }

  getUsers() {
    return this.http.get<Users[]>(environment.urlAPI + 'users');
  }

  getUserDetails(id: number) {
    return this.http.get<Users>(environment.urlAPI + 'users/' + id);
  }

  deleteUser(id: number) {
    return this.http.delete<Users>(environment.urlAPI + 'users/' + id);
  }
}
