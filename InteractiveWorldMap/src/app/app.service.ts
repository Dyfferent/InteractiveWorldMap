import { HttpClient } from "@angular/common/http";
import { Injectable, Input} from "@angular/core";
import { count } from "rxjs";

interface Country {
    id: string;
    name: string;
    capitalCity: string;
    region: {
        id: string
        value:string;
    }
    incomeLevel: {
        value: string;
    }
    lendingType: {
        value : string;
    }
}

@Injectable({
    providedIn: 'root',
})
export class AppService {
    constructor(private http: HttpClient){} 
    selectedCountryInfo?: Country
    selectedCountryId?: string


    url = 'https://api.worldbank.org/v2/country/'
    queryString = ''
    format = '?format=JSON'
    endpoint = ''
    

    onSelect(event: Event){
        const selectedCountry = event.target as SVGPathElement
        selectedCountry.setAttribute('fill','red')
        this.selectedCountryId = selectedCountry.id
    }

    getCountryInfo(selectedCountry:string) {
        let queryString = `${this.url}${this.selectedCountryId}`
        this.endpoint = `${this.url}${this.selectedCountryId}${this.format}`

        this.http.get(this.endpoint).subscribe({
            next: (resData:any) => {
                 let countryData = resData[1][0]

                 this.selectedCountryInfo = {
                        id: countryData.id,
                        name: countryData.name,
                        capitalCity: countryData.capitalCity,
                        region: {
                            id: countryData.region.id,
                            value:countryData.region.value
                        },
                        incomeLevel: {
                            value: countryData.incomeLevel.value,
                        },
                        lendingType: {
                            value : countryData.lendingType.value,
                        }
                 }
            }
        })
        return this.selectedCountryInfo
    }
}
