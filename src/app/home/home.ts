import {Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location/housing-location";
import {HousingLocationInfo} from '../housinglocation';
import {Housing} from "../housing";

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <input type="text" placeholder="Filter by city" />
      <button class="primary" type="button">Search</button>
    </section>
    <section class="results">
      @for ( housingLocation of housingLocationList; track housingLocation) {
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
  styles: ``,
  styleUrls: ['./home.css'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housing: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housing.getAllHousingLocations();
  }
}
