import { TestBed } from '@angular/core/testing';

import { CerbungserviceService } from './cerbungservice.service';

describe('CerbungserviceService', () => {
  let service: CerbungserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerbungserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
