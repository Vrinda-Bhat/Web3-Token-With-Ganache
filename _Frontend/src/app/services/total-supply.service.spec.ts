import { TestBed } from '@angular/core/testing';

import { TotalSupplyService } from './total-supply.service';

describe('TotalSupplyService', () => {
  let service: TotalSupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalSupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
