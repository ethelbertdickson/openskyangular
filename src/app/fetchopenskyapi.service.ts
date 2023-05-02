import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchopenskyapiService {
  constructor(private http: HttpClient) {}

  getFlight(begin: number, end: number): Observable<any> {
    const url = `https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`;

    return this.http.get(url);
  }
}
