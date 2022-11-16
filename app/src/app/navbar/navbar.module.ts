import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientiComponent } from './clienti/clienti.component';
import { DettagliUtenteComponent } from './utenti/dettagli-utente/dettagli-utente.component';
import { UtentiComponent } from './utenti/utenti.component';
import { FattureComponent } from './fatture/fatture.component';
import { ClientDetailsComponent } from './clienti/client-details/client-details.component';
import { FormsModule } from '@angular/forms';
import { UtentiModule } from './utenti/utenti.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';



@NgModule({
  declarations: [ClientiComponent, DettagliUtenteComponent, UtentiComponent, FattureComponent, ClientDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class NavbarModule { }
