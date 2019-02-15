import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KumppariService } from '../kumppari.service';
import { rubberboot } from '../rubberboot.interface';

@Component({
  selector: 'app-muokkaa',
  templateUrl: './muokkaa.component.html',
  styleUrls: ['./muokkaa.component.css']
})
export class MuokkaaComponent implements OnInit {

  rubberboot: rubberboot = { id: null, name: null, color: null, price: null, availability: null };
  id: number;

  constructor(
    private service: KumppariService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      this.id = +parameters.id;
    })
    this.rubberboot = this.service.getRubberbootById(this.id);
  }

  saveChanges = (rubberboot: rubberboot) => {
    this.service.editRubberBoot(this.id, rubberboot);
    this.router.navigateByUrl("/listaus");
  }

  cancel() {
    this.router.navigateByUrl("listaus");
  }

}
