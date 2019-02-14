import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LisaaComponent } from './lisaa/lisaa.component';
import { MuokkaaComponent } from './muokkaa/muokkaa.component';
import { PoistaComponent } from './poista/poista.component';
import { ListausComponent } from './listaus/listaus.component';
import { KumppariService } from '../app/kumppari.service';

let appRoutes: Routes = [
  { path: 'listaus', component: ListausComponent },
  { path: 'lisaa', component: LisaaComponent },
  { path: 'muokkaa/:id', component: MuokkaaComponent },
  { path: 'poista/:id', component: PoistaComponent },
  { path: '', redirectTo: 'listaus', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LisaaComponent,
    MuokkaaComponent,
    PoistaComponent,
    ListausComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [KumppariService],
  bootstrap: [AppComponent]
})
export class AppModule { }
