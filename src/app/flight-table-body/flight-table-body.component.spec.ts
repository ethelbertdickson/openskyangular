import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTableBodyComponent } from './flight-table-body.component';

describe('FlightTableBodyComponent', () => {
  let component: FlightTableBodyComponent;
  let fixture: ComponentFixture<FlightTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTableBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
