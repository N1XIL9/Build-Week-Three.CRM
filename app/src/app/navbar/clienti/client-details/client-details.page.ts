import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss']
})
export class ClientDetailsPage implements OnInit {

  cliente?: Client;

  constructor(private router:ActivatedRoute, private clientService:ClientService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
    this.clientService.getClientDetails(id).subscribe((data)=>{
      this.cliente = data
      console.log(this.cliente);

    })
  })
}

}
