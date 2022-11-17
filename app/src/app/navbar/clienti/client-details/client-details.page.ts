import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {
  cliente?: any;
  showCard? = true;
  closeResult?: string;
  userForm!: FormGroup;
  noShow = true;

  constructor(
    private router: ActivatedRoute,
    private clientService: ClientService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.clientService.getClientDetails(id).subscribe((data) => {
        this.cliente = data;
        console.log(this.cliente);
        this.userForm = this.formBuilder.group(this.cliente);
      });
    });
  }

  closeDetails() {
    this.showCard = false;
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
    this.userForm.get('ragioneSociale')?.setValue(this.cliente?.ragioneSociale);
    this.userForm.get('tipoCliente')?.setValue(this.cliente?.tipoCliente);
    this.userForm.get('partitaIva')?.setValue(this.cliente?.partitaIva);
    this.userForm.get('email')?.setValue(this.cliente?.email);
    this.userForm.get('pec')?.setValue(this.cliente?.pec);
    this.userForm.get('telefono')?.setValue(this.cliente?.telefono);
    this.userForm.get('nomeContatto')?.setValue(this.cliente?.nomeContatto);
    this.userForm
      .get('cognomeContatto')
      ?.setValue(this.cliente?.cognomeContatto);
    this.userForm
      .get('telefonoContatto')
      ?.setValue(this.cliente?.telefonoContatto);
    this.userForm.get('emailContatto')?.setValue(this.cliente?.emailContatto);
    this.userForm
      .get('indirizzoSede.via')
      ?.setValue(this.cliente?.indirizzoSede?.via);
    this.userForm
      .get('indirizzoSede.civico')
      ?.setValue(this.cliente?.indirizzoSede?.civico);
    this.userForm
      .get('indirizzoSede.cap')
      ?.setValue(this.cliente?.indirizzoSede?.cap);
    this.userForm
      .get('indirizzoSede.comune.nome')
      ?.setValue(this.cliente?.indirizzoSede?.comune.nome);
    this.userForm
      .get('indirizzoSede.comune.provincia')
      ?.setValue(this.cliente?.indirizzoSede?.comune.provincia);

    console.log(this.userForm.value);
  }

  onSubmit() {
    this.clientService
      .patchClient(this.cliente?.id, this.userForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
