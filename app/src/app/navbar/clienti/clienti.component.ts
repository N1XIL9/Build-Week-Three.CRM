import { Component, OnInit } from '@angular/core';
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
  page = 1;
	pageSize = 4;
  collectionSize?:number
  data= new Date()

  constructor(private clientService:ClientService, private router:Router) { }

  ngOnInit(): void {
    this.clientService.getClient().subscribe((data)=>{
      this.clienti = data
      console.log(this.data);
    })
  }


}

