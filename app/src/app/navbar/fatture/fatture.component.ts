import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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

  fatture: Fatture[] = []
  dateIns = new Date()
  statoFattura = "NON PAGATA"
  noShow = true
  error = undefined
  showAlert = false
  invoiceForm: FormGroup = new FormGroup({})



  constructor(private fattureService: FattureService, private clientService: ClientService) { }

  ngOnInit(): void {
  this.fattureService.getInvoice().subscribe((data) =>{
    this.fatture = data
  })

}

onSubmit(){
  this.invoiceForm = new FormGroup({
    "cliente": new FormGroup({
      id: new FormControl(),
      nome: new FormControl()
    }),
    "importo": new FormControl(),
    "dataInserimento": new FormControl(new Date()),
    "stato": new FormControl("NON PAGATA")
  })

    console.log(this.invoiceForm.value)

  //   form.value.dataInserimento = this.dateIns
  //   form.value.stato = this.statoFattura
  //   this.fattureService.addInvoice(form.value).subscribe((data) =>{console.log(data);
  // },
  // err => {
  //   console.log(err);
  //   this.error = err.error;
  //   this.showAlert = !this.showAlert
  //   })
  }



  close(){}


}
