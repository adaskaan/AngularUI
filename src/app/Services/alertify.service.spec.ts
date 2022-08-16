import { TestBed } from '@angular/core/testing';

import { AlertifyService } from '../Services/alertify.service';

describe('AlertifyService', () => {
  let service: AlertifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
