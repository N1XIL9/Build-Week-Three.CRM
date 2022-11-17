import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clienti-lista',
  templateUrl: './clienti-lista.component.html',
  styleUrls: ['./clienti-lista.component.scss'],
})
export class ClientiListaComponent implements OnInit {
  clienti: Client[] = [];
  page = 1;
  pageSize = 4;
  collectionSize?: number;
  noShow = true;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClient().subscribe((data) => {
      this.clienti = data;
      console.log(data);
    });
  }

  deleteCl(clienti: any) {
    if (confirm('Vuoi eliminare questo cliente?')) {
      this.clientService.deleteClient(clienti.id).subscribe(
        (resp) => {
          this.clienti;
        },
        (error) => console.log(error)
      );
    }
  }
}
