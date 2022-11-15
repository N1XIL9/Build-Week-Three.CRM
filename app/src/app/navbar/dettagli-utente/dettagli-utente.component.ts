import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';
import { Users } from 'src/app/auth/Users';

@Component({
  selector: 'app-dettagli-utente',
  templateUrl: './dettagli-utente.component.html',
  styleUrls: ['./dettagli-utente.component.scss'],
})
export class DettagliUtenteComponent implements OnInit {
  user: Users | undefined;

  constructor(
    private authService: ServiceService,
    private activateRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => {
      const id = +params['id'];
      this.authService
        .getUserDetails(id)
        .subscribe((data) => (this.user = data));
      console.log(this.user);
    });
  }
}
