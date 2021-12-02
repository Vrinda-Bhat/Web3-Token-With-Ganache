import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsInCirculationComponent } from './points-in-circulation.component';

describe('PointsInCirculationComponent', () => {
  let component: PointsInCirculationComponent;
  let fixture: ComponentFixture<PointsInCirculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsInCirculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsInCirculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
