import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';
import { Users } from 'src/app/auth/Users';
import { DettagliUtenteComponent } from '../dettagli-utente/dettagli-utente.component';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss'],
})
export class UtentiComponent implements OnInit {
  users: Users[] = [];

  constructor(
    private authService: ServiceService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
