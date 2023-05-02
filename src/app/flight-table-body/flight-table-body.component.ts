import { Component, Input } from '@angular/core';

@Component({
  selector: 'flight-table-body',
  templateUrl: './flight-table-body.component.html',
  styleUrls: ['./flight-table-body.component.css'],
})
export class FlightTableBodyComponent {
  @Input() flights: any[] = [];
}
