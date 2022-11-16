import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  cliente?: Client;

  constructor(private router:ActivatedRoute, private clientService:ClientService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
    this.clientService.getClientDetails(id).subscribe((data)=>{
      this.cliente = data
    })
  })
}

}
