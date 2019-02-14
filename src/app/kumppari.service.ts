import { Injectable } from '@angular/core';
import { kumppari } from '../app/kumppari.interface';

@Injectable()
export class KumppariService {

  kumpparit: kumppari[] = [];

  constructor() {
    if (typeof (Storage) != undefined) {
      let haku = localStorage.getItem("kumpparit");
      if (haku == null) {
        localStorage.setItem("kumpparit", "[]");
      }
    }
  }

  haeKumpparit = () => {
    if (typeof (Storage) != undefined) {
      return localStorage.getItem("kumpparit");
    }
  }

  lisaaKumppari = (kumppari: kumppari) => {
    if (typeof (Storage) != undefined) {
      let kumpparit = JSON.parse(localStorage.getItem("kumpparit"));
      kumppari.id = this.luoId();

      kumpparit.push(kumppari);
      console.log(kumppari)
      localStorage.setItem("kumpparit", kumpparit);
    }
  }

  luoId = () => {
    if (typeof (Storage) != undefined) {
      let kumpparit: kumppari[] = JSON.parse(localStorage.getItem("kumpparit"));
      let indeksi = 0;
      for (let kumppari of kumpparit) {
        indeksi++;
      }
      return indeksi;
    }
  }

}
