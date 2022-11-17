import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from '../fatture.service';

@Component({
  selector: 'app-fatture-details',
  templateUrl: './fatture-details.component.html',
  styleUrls: ['./fatture-details.component.scss']
})
export class FattureDetailsComponent implements OnInit {
  fattura!: any;
  bool= false
  fatturaForm!: FormGroup

  constructor(private fattureService: FattureService, private router: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.fattureService.getInvoiceDetails(id).subscribe((data) => {
        this.fattura = data;
      });
    });
    this.fatturaForm = this.formBuilder.group({
      cliente: '',
      numero: '',
      importo: '',
      stato: '',
    });
  }



 onSubmit() {

 }

changeProp() {
  this.bool = !this.bool;
  this.fatturaForm.get('cliente')?.setValue(this.fattura.cliente);
  this.fatturaForm.get('numero')?.setValue(this.fattura.numero);
  this.fatturaForm.get('importo')?.setValue(this.fattura.importo);
  this.fatturaForm.get('stato')?.setValue(this.fattura.stato);
  console.log(this.fatturaForm.value);
}

deleteUser() {}
}

