import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { UtentiComponent } from './navbar/utenti/utenti.component';
import { ClientiComponent } from './navbar/clienti/clienti.component';
import { FattureComponent } from './navbar/fatture/fatture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DettagliUtenteComponent } from './navbar/dettagli-utente/dettagli-utente.component';
import { MatCardModule } from '@angular/material/card';
import { ClientDetailsPage } from './navbar/clienti/client-details/client-details.page';
import { ClientiListaComponent } from './navbar/clienti/clienti-lista/clienti-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UtentiComponent,
    ClientiComponent,
    FattureComponent,
    DettagliUtenteComponent,
    ClientDetailsPage,
    ClientiListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
