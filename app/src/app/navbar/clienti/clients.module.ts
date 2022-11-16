import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientiComponent } from './clienti.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ClientDetailsComponent, ClientiComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class ClientsModule { }
