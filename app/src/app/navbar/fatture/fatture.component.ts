import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../clienti/client';
import { ClientService } from '../clienti/client.service';
import { Fatture } from './fatture';
import { FattureService } from './fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {

  @ViewChild("invoiceDiv") invoiceDiv!: HTMLDivElement

  fatture: Fatture[] = []
  dateIns = new Date()
  statoFattura = "NON PAGATA"
  noShow = true
  error = undefined
  showAlert = false
  invoiceForm: FormGroup = new FormGroup({})
  idNr: any
  clienti: Client[] = []



  constructor(private fattureService: FattureService, private clientService: ClientService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  this.fattureService.getInvoice().subscribe((data) =>{
    this.fatture = data
    this.invoiceForm = new FormGroup({
      "cliente": new FormGroup({
        id: new FormControl(),
      }),
      "importo": new FormControl(),
      "dataInserimento": new FormControl(new Date()),
      "stato": new FormControl("NON PAGATA"),
      "quantita": new FormControl(),
      "servizio": new FormControl()
    })

console.log(this.invoiceForm.value)

  }
)
this.clientService.getClient().subscribe(data => this.clienti = data)


}




onSubmit(){
  this.fattureService.addInvoice(this.invoiceForm?.value).subscribe(data =>
    {console.log(data)
  //   this.newInvoiceID = data
  //   console.log(this.newInvoiceID)
  // this.fattureService.getInvoiceDetails(this.newInvoiceID.id).subscribe(data =>
  //   {console.log(data)
  //     this.fattura = data;
  //   this.idNr = this.fattura.cliente.id
  //   this.clientService.getClientDetails(this.idNr).subscribe(data =>
  //     {this.cliente = data
  //   console.log(this.cliente)}
  //   )
  // }
  // )
}
  )
  }


  close(){}


}
