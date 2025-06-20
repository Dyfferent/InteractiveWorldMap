import { Component } from '@angular/core';
import { AppService } from './app.service';
import { inject, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'MyAppFinal';
  private appService = inject(AppService)
  selectedId: any
  cardInfo: any

  onSelect(event: Event){
    this.selectedId = this.appService.selectedCountryId
    const selectedCountry = event.target as SVGPathElement
    selectedCountry.setAttribute('fill','red')
    this.appService.selectedCountryId = selectedCountry.id
    this.cardInfo = this.appService.getCountryInfo(selectedCountry.id)
  }
}
