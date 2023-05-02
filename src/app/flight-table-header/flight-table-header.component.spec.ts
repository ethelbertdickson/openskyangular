import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTableHeaderComponent } from './flight-table-header.component';

describe('FlightTableHeaderComponent', () => {
  let component: FlightTableHeaderComponent;
  let fixture: ComponentFixture<FlightTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTableHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
