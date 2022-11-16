import { Component, OnInit } from '@angular/core';
import { Fatture } from './fatture';
import { FattureService } from './fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {

  fatture: Fatture[] = []

  constructor(private fattureService: FattureService) { }

  ngOnInit(): void {
    this.fattureService.getInvoice().subscribe(data => [this.fatture = data])
  }



}
