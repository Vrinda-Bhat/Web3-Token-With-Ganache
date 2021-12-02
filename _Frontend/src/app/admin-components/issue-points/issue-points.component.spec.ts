import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuePointsComponent } from './issue-points.component';

describe('IssuePointsComponent', () => {
  let component: IssuePointsComponent;
  let fixture: ComponentFixture<IssuePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
