import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss']
})
export class ClientDetailsPage implements OnInit {

  cliente?: Client;
  showCard?=true;
  closeResult?: string;
  userForm!: FormGroup;
  noShow= true;

  constructor(private router:ActivatedRoute, private clientService:ClientService, private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
    this.clientService.getClientDetails(id).subscribe((data)=>{
      this.cliente = data
      console.log(this.cliente);
      this.userForm = this.formBuilder.group(this.cliente);
    })
  })
}

closeDetails(){
  this.showCard = false
}

openVerticallyCentered(content:any) {
  this.modalService.open(content, { centered: true });
}

onSubmit(){
  console.log(this.userForm.value)
}
}
