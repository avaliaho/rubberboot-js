import { Injectable } from '@angular/core';
import { rubberboot } from './rubberboot.interface';

@Injectable()
export class KumppariService {

  constructor() {
    if (typeof (Storage) != undefined) {
      let search = JSON.parse(localStorage.getItem("rubberboots"));
      if (search == null) {
        localStorage.setItem("rubberboots", "[]");
      }
    }
  }

  getRubberbootById = (id: number) => {
    if (typeof (Storage) != undefined) {
      let rubberboots: rubberboot[] = JSON.parse(localStorage.getItem("rubberboots"));
      return rubberboots[id]
    }
  }

  getRubberboots = () => {
    if (typeof (Storage) != undefined) {
      return JSON.parse(localStorage.getItem("rubberboots"));
    }
  }

  addRubberboot = (rubberboot: rubberboot) => {
    if (typeof (Storage) != undefined) {
      let rubberboots = JSON.parse(localStorage.getItem("rubberboots"));
      rubberboot.id = this.generateId();
      console.log(rubberboot)

      rubberboots.push(rubberboot);
      localStorage.setItem("rubberboots", JSON.stringify(rubberboots));
    }
  }

  editRubberBoot = (id: number, editedBoot: rubberboot) => {
    if (typeof (Storage) != undefined) {
      let rubberboots: rubberboot[] = JSON.parse(localStorage.getItem("rubberboots"));
      rubberboots[id] = editedBoot;
      localStorage.setItem("rubberboots", JSON.stringify(rubberboots));
    }
  }

  deleteRubberboot = (id: number) => {
    if (typeof(Storage) != undefined) {
      let rubberboots: rubberboot[] = JSON.parse(localStorage.getItem("rubberboots"));
      rubberboots.splice(id, 1);
      localStorage.setItem("rubberboots", JSON.stringify(rubberboots));
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
