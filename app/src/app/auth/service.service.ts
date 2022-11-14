import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './Users';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http:HttpClient) {}

  signup(obj:Users){
    return this.http.post(environment.urlAPI+'signup',obj)
  }

  login(obj:Users){
    return this.http.post(environment.urlAPI+'login',obj)
  }
}
