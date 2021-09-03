import { TestBed } from '@angular/core/testing';

import { SourceTokenInterceptorService } from './source-token-interceptor.service';

describe('SourceTokenInterceptorService', () => {
  let service: SourceTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
