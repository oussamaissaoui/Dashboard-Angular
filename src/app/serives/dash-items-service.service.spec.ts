import { TestBed } from '@angular/core/testing';

import { DashItemsServiceService } from './dash-items-service.service';

describe('DashItemsServiceService', () => {
  let service: DashItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
