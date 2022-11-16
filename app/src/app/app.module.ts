import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { UtentiComponent } from './navbar/utenti/utenti.component';
import { ClientiComponent } from './navbar/clienti/clienti.component';
import { FattureComponent } from './navbar/fatture/fatture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DettagliUtenteComponent } from './navbar/dettagli-utente/dettagli-utente.component';
import { MatCardModule } from '@angular/material/card';
import { ClientsModule } from './navbar/clienti/clients/clients.module';
import { UtentiModule } from './navbar/utenti/utenti/utenti.module';
import { NavbarModule } from './navbar/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UtentiComponent,
    ClientiComponent,
    FattureComponent,
    DettagliUtenteComponent,
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
    MatCardModule,
    ClientsModule,
    UtentiModule,
    NavbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
