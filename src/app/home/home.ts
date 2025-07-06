import {Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location/housing-location";
import {HousingLocationInfo} from '../housing-location/housinglocation';
import {Housing} from "../housing-location/housing";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-home',
    imports: [HousingLocation, FormsModule],
    template: `
        <section>
            <form (ngSubmit)="filterResults(filter.value)">
                <input type="text" placeholder="Filter by city" #filter autocomplete="off"/>
                <button class="primary" type="submit">Search</button>
            </form>
        </section>
        <section class="results">
            @for (housingLocation of filteredLocationList; track housingLocation) {
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
    filteredLocationList: HousingLocationInfo[] = [];

    constructor() {}

    async ngOnInit() {
        this.housingLocationList = await this.housing.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
    }

    filterResults(text: String) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        this.filteredLocationList = this.housingLocationList.filter(
            hl => {
                return hl?.city.toLowerCase().includes(text.toLowerCase());
            });
    }
}
