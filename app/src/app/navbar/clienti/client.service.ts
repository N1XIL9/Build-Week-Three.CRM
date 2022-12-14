import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  addClient(obj: Client) {
    return this.http.post(environment.urlAPI + 'client', obj);
  }

  getClient() {
    return this.http.get<Client[]>(environment.urlAPI + 'client');
  }

  getClientDetails(id: number) {
    return this.http.get<Client>(environment.urlAPI + 'client/' + id);
  }

  patchClient(id: number, data: Partial<Client>) {
    return this.http.patch<any>(environment.urlAPI + 'client/' + id, data);
  }

  deleteClient(id: number) {
    return this.http.delete<Client>(environment.urlAPI + 'client/' + id);
  }
}
