import { Component, OnInit } from '@angular/core';
import { KumppariService } from '../kumppari.service';
import { rubberboot } from '../rubberboot.interface';

@Component({
  selector: 'app-listaus',
  templateUrl: './listaus.component.html',
  styleUrls: ['./listaus.component.css']
})
export class ListausComponent implements OnInit {

  rubberboots: rubberboot[] = [];

  constructor(private service: KumppariService) { }

  ngOnInit() {
    this.rubberboots = this.service.getRubberboots();
  }

}
