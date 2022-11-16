import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UtentiComponent } from './utenti.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DettagliUtenteComponent } from './dettagli-utente.component';




@NgModule({
  declarations: [UtentiComponent, DettagliUtenteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    FormsModule
  ]
})
export class UtentiModule { }
