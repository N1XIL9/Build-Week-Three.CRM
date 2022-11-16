import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientiComponent } from './clienti.component';



@NgModule({
  declarations: [ClientDetailsComponent, ClientiComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class ClientsModule { }
