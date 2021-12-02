import { TestBed } from '@angular/core/testing';

import { IssuePointsService } from './issue-points.service';

describe('IssuePointsService', () => {
  let service: IssuePointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuePointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
