import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fatture } from './fatture';
import { FattureService } from './fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {

  @ViewChild('id',{read:ElementRef}) id?: ElementRef;
  idNr?:number
  fatture: Fatture[] = []

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getInvoice().subscribe((data) => {
      this.fatture = data;
      console.log(this.fatture)
      this.idNr = this.id?.nativeElement.textContent
      console.log(this.idNr);
    })

  }


  onSubmit(form: NgForm){
    this.fattureService.addInvoice(form.value)
    console.log(form.value)
  }


}
