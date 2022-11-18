import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../clienti/client';
import { ClientService } from '../clienti/client.service';
import { Fatture } from './fatture';
import { FattureService } from './fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss'],
})
export class FattureComponent implements OnInit {
  fattureArr: any[] = [];
  dateIns = new Date();
  statoFattura = 'NON PAGATA';
  noShow = true;
  error = undefined;
  showAlert = false;
  invoiceForm!: FormGroup;
  idNr?: any;
  newInvoiceID: any;
  fattura: any;
  cliente?: any;

  constructor(
    private fattureService: FattureService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fattureService.getInvoice().subscribe((respFatture) => {
      this.fattureArr = respFatture;
      console.log(respFatture);
    });

    this.clientService.getClient().subscribe((respClienti) => {
      this.cliente = respClienti;
      console.log(respClienti);
    });

    this.invoiceForm = this.formBuilder.group({
      data: '',
      numero: null,
      anno: null,
      importo: null,
      stato: '',
      cliente: new FormControl(null),
      dataInserimento: new Date(),
      // "dataUltimaModifica": "2021-03-24T21:32:06.375+00:00"
    });
  }

  onSubmit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.clientService.getClientDetails(id).subscribe((data) => {
        console.log(data);
      });

      // this.fattureService
      //   .addInvoice(this.invoiceForm?.value)
      //   .subscribe((data) => {
      //     console.log(data);
      //     this.newInvoiceID = data;
      //     console.log(this.newInvoiceID);
      //     this.fattureService
      //       .getInvoiceDetails(this.newInvoiceID.id)
      //       .subscribe((data) => {
      //         console.log(data);
      //         this.fattura = data;
      //         this.idNr = this.fattura.cliente.id;
      //         this.clientService
      //           .getClientDetails(this.idNr)
      //           .subscribe((data) => {
      //             this.cliente = data;
      //             console.log(this.cliente);
      //           });
      //       });
      //   });
    });
  }

  close() {}
}
