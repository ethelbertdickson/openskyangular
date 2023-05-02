import { Component } from '@angular/core';
import { FetchopenskyapiService } from '../fetchopenskyapi.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  //
  flights: any[] = [];

  constructor(
    private openSky: FetchopenskyapiService,
    private auth: AuthService,
    private router: Router
  ) {
    const begin = 1517227200;
    const end = 1517230800;

    this.openSky
      .getFlight(begin, end)
      .subscribe((data) => (this.flights = data));
  }

  logout() {
    console.log('logging out...');
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
