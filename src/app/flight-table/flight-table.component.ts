import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css'],
})
export class FlightTableComponent {
  @Input() flights: any[] = [];
}
