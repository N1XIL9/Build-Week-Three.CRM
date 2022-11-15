import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';
import { Users } from 'src/app/auth/Users';

@Component({
  selector: 'app-dettagli-utente',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.scss'],
})
export class DettagliUtenteComponent implements OnInit {
  user: any;
  dipendente!: any;
  constructor(
    private authService: ServiceService,
    private activateRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => {
      const id = +params['id'];

      this.authService.getUserDetails(id).subscribe((data) => {
        this.user = data;
        this.dipendente = this.user;
        console.log(this.user);
        console.log(data);
      });
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.user);

    // this.authService.changeRole(this.user.id, form.value).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
