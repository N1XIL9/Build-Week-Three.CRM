import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss']
})
export class ClientListPage implements OnInit {

  clienti: Client[]=[]
  page = 1;
	pageSize = 4;
  collectionSize?:number


  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getClient().subscribe((data)=>{
      this.clienti = data
      console.log(data);
    })
  }

}
