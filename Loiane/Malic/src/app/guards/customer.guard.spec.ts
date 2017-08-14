import { TestBed, inject } from '@angular/core/testing';

import { CustomerGuard } from './customer.guard';

describe('CustomerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerGuard]
    });
  });

  it('should be created', inject([CustomerGuard], (service: CustomerGuard) => {
    expect(service).toBeTruthy();
  }));
});
