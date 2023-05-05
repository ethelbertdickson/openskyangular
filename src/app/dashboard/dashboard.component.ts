import { Component, OnInit } from '@angular/core';
import { FetchopenskyapiService } from '../fetchopenskyapi.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //
  flights: any[] = [];
  isLoading: boolean = true;
  error: string = '';

  constructor(
    private openSky: FetchopenskyapiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const begin = 1517227200;
    const end = 1517230800;

    this.openSky.getFlight(begin, end).subscribe({
      next: (data) => {
        this.isLoading = false;
        // console.log('data from dashboard.ts: ', data);
        this.flights = data;
        console.log('flight data from dashboard.ts: ', this.flights);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
        this.error = error.message;
      },
      complete: () => console.log('call to api complete successfully'),
    });
  }

  logout() {
    console.log('logging out...');
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
