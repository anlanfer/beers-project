import { Component } from '@angular/core';
import {PunkService} from "./punk.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Beers';
  beers$ = this.punkService.getAllBeers();

  constructor(public punkService: PunkService) {}

  showProducts(search:any): void {
    this.beers$ = search ? search : this.punkService.getAllBeers();
  }

}
