import {Injectable} from '@angular/core';
import {HousingLocationInfo} from "../housinglocation";

@Injectable({
    providedIn: 'root'
})
export class Housing {
    // set this to false to use hardcoded values instead
    USE_JSON_SERVER = true;

    // url to the JSON server
    url = 'http://localhost:3000/locations';

    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    housingLocationList: HousingLocationInfo[] = [
        {
            id: 0,
            name: 'Acme Fresh Start Housing',
            city: 'Chicago',
            state: 'IL',
            photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
            availableUnits: 4,
            wifi: true,
            laundry: true,
        },
        {
            id: 1,
            name: 'A113 Transitional Housing',
            city: 'Santa Monica',
            state: 'CA',
            photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
            availableUnits: 0,
            wifi: false,
            laundry: true,
        },
        {
            id: 2,
            name: 'Warm Beds Housing Support',
            city: 'Juneau',
            state: 'AK',
            photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
            availableUnits: 1,
            wifi: false,
            laundry: false,
        },
        {
            id: 3,
            name: 'Homesteady Housing',
            city: 'Chicago',
            state: 'IL',
            photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
            availableUnits: 1,
            wifi: true,
            laundry: false,
        },
        {
            id: 4,
            name: 'Happy Homes Group',
            city: 'Gary',
            state: 'IN',
            photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
            availableUnits: 1,
            wifi: true,
            laundry: false,
        },
        {
            id: 5,
            name: 'Hopeful Apartment Group',
            city: 'Oakland',
            state: 'CA',
            photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
            availableUnits: 2,
            wifi: true,
            laundry: true,
        },
        {
            id: 6,
            name: 'Seriously Safe Towns',
            city: 'Oakland',
            state: 'CA',
            photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
            availableUnits: 5,
            wifi: true,
            laundry: true,
        },
        {
            id: 7,
            name: 'Hopeful Housing Solutions',
            city: 'Oakland',
            state: 'CA',
            photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
            availableUnits: 2,
            wifi: true,
            laundry: true,
        },
        {
            id: 8,
            name: 'Seriously Safe Towns',
            city: 'Oakland',
            state: 'CA',
            photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
            availableUnits: 10,
            wifi: false,
            laundry: false,
        },
        {
            id: 9,
            name: 'Capital Safe Towns',
            city: 'Portland',
            state: 'OR',
            photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
            availableUnits: 6,
            wifi: true,
            laundry: true,
        },
    ];

    constructor() {
    }

    async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
        if (this.USE_JSON_SERVER) {
            try {
                const response = await fetch(this.url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const json = await response.json();
                this.housingLocationList = json ?? [];
            } catch (error) {
                console.error('Error fetching housing locations:', error);
                console.log('Using hardcoded housing locations instead, from now on.');
                this.USE_JSON_SERVER=false;
            }
        }

        return this.housingLocationList;
    }

    async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
        if (this.USE_JSON_SERVER) {
            try {
                const response = await fetch(`${this.url}?id=${id}`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const locationJson = await response.json();
                return locationJson[0]; // undefined if not found, no need for `?? {}`
            } catch (error) {
                console.error('Failed to fetch housing location by ID:', error);
                console.log('Using hardcoded housing locations instead, from now on.');
                this.USE_JSON_SERVER=false;
            }
        }

        return this.housingLocationList.find(loc => loc.id === id);
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(
            `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
        );
    }
}
