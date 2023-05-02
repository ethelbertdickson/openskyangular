import { Component } from '@angular/core';
import { FetchopenskyapiService } from '../fetchopenskyapi.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  //
  flights: any[] = [];

  constructor(private openSky: FetchopenskyapiService) {
    const begin = 1517227200;
    const end = 1517230800;

    this.openSky
      .getFlight(begin, end)
      .subscribe((data) => (this.flights = data));
  }
}
