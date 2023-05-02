import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { FetchopenskyapiService } from './fetchopenskyapi.service';
import { FlightTableBodyComponent } from './flight-table-body/flight-table-body.component';
import { FlightTableHeaderComponent } from './flight-table-header/flight-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FlightTableBodyComponent,
    FlightTableHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FetchopenskyapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
