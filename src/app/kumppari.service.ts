import { Injectable } from '@angular/core';
import { rubberboot } from './rubberboot.interface';

@Injectable()
export class KumppariService {

  kumpparit: rubberboot[] = [];

  constructor() {
    if (typeof (Storage) != undefined) {
      let search = localStorage.getItem("rubberboots");
      if (search == null) {
        localStorage.setItem("rubberboots", "[]");
      }
    }
  }

  getRubberboots = () => {
    if (typeof (Storage) != undefined) {
      return localStorage.getItem("rubberboots");
    }
  }

  addRubberboot = (rubberboot: rubberboot) => {
    if (typeof (Storage) != undefined) {
      let rubberboots = JSON.parse(localStorage.getItem("rubberboots"));
      rubberboot.id = this.generateId();

      rubberboots.push(rubberboot);
      console.log(rubberboot);
      localStorage.setItem("rubberboots", rubberboots);
    }
  }

  generateId = () => {
    if (typeof (Storage) != undefined) {
      let rubberboots: rubberboot[] = JSON.parse(localStorage.getItem("rubberboots"));
      let index = 0;
      for (let rubberboot of rubberboots) {
        index++;
      }
      return index;
    }
  }

}
