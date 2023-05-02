import { TestBed } from '@angular/core/testing';

import { FetchopenskyapiService } from './fetchopenskyapi.service';

describe('FetchopenskyapiService', () => {
  let service: FetchopenskyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchopenskyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
