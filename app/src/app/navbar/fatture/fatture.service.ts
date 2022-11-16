import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from './fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }


  addInvoice(obj: Fatture){
    return this.http.post<Fatture>(environment.urlAPI + "invoice", obj)
  }

  getInvoice(){
    return this.http.get<Fatture[]>(environment.urlAPI + "invoices")
  }

  getInvoiceDetails(id: number){
    return this.http.post(environment.urlAPI + "invoices/", id)
  }
}
