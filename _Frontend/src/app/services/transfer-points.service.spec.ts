import { TestBed } from '@angular/core/testing';

import { TransferPointsService } from './transfer-points.service';

describe('TransferPointsService', () => {
  let service: TransferPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
