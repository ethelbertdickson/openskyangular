import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css'],
})
export class FlightTableComponent implements OnChanges {
  @Input() flights_info: any[] = [];
  @Input() isLoading: boolean = true;
  @Input() error: string = '';

  searchQuery: string = '';
  filteredFlights: any[] = [];

  constructor() {}

  ngOnChanges() {
    if (this.flights_info) {
      this.filterFlights();
    }
  }

  private filterFlights() {
    this.filteredFlights = this.flights_info.filter((flight) => {
      return (
        flight.callsign &&
        flight.callsign.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }

  search(query: string) {
    console.log(query);
    this.searchQuery = query;
    this.filterFlights();
  }
}
