import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { rubberboot } from '../rubberboot.interface';
import { KumppariService } from '../kumppari.service';

@Component({
  selector: 'app-poista',
  templateUrl: './poista.component.html',
  styleUrls: ['./poista.component.css']
})
export class PoistaComponent implements OnInit {

  rubberboot: rubberboot = { id: null, name: null, color: null, price: null, availability: null };
  id: number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private service: KumppariService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.id = +parameters.id;
    })
    this.rubberboot = this.service.getRubberbootById(this.id);
  }

  cancel() {
    this.router.navigateByUrl("/listaus");
  }

  deleteRubberboot = () => {
    this.service.deleteRubberboot(this.id);
    this.router.navigateByUrl("/listaus");
  }

}
