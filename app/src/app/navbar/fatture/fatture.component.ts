import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fatture } from './fatture';
import { FattureService } from './fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {

id?: number
  fatture: Fatture[] = []

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getInvoice().subscribe(data => {this.fatture = data})
    //this.id = this.fatture.cliente.id
    console.log(this.fatture)
  }

  onSubmit(form: NgForm){
    this.fattureService.addInvoice(form.value)
    console.log(form.value)
  }


}
