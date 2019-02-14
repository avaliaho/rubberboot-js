import { Component, OnInit } from '@angular/core';
import { kumppari } from '../kumppari.interface';
import { KumppariService } from '../kumppari.service';

@Component({
  selector: 'app-lisaa',
  templateUrl: './lisaa.component.html',
  styleUrls: ['./lisaa.component.css']
})
export class LisaaComponent implements OnInit {

  kumppari: kumppari[] = [];

  constructor(private service: KumppariService) { }

  ngOnInit() {
    console.log(this.service.luoId())
  }

  lisaaKumppari = (kumppari: kumppari) => {
    this.service.lisaaKumppari(kumppari);
  }

}
