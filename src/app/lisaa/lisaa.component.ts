import { Component, OnInit } from '@angular/core';
import { rubberboot } from '../rubberboot.interface';
import { KumppariService } from '../kumppari.service';

@Component({
  selector: 'app-lisaa',
  templateUrl: './lisaa.component.html',
  styleUrls: ['./lisaa.component.css']
})
export class LisaaComponent implements OnInit {

  rubberboot: rubberboot = { id: 0, name: "", color: "", price: null, availability: null };

  constructor(private service: KumppariService) { }

  ngOnInit() {
    console.log(this.service.generateId())
  }

  addRubberboot = (rubberboot: rubberboot) => {
    this.service.addRubberboot(rubberboot);
  }

}
