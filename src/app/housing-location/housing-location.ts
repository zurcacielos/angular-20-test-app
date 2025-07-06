import {Component, input} from '@angular/core';
import {HousingLocationInfo} from "../housinglocation";

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section>
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{housingLocation().name}}"
        crossorigin
        />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
    </section>
  `,
  styles: ``,
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  //requiered = parent must provide a value
  housingLocation = input.required<HousingLocationInfo>();
}
