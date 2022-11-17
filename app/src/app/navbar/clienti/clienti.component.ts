import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from './client';
import { ClientDetailsPage } from './client-details/client-details.page';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {

  clienti: Client[]=[]
  dateIns= new Date()
  noShow= true
  error=undefined
  showAlert=false

  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    form.value.dataInserimento = this.dateIns
    console.log(form.value);
    this.clientService.addClient(form.value).subscribe((data)=>{
      console.log(data);
    },
    err => {
      console.log(err);
      this.error = err.error;
      this.showAlert = !this.showAlert
      })
  }

  close(){
    this.showAlert = !this.showAlert
  }


}

