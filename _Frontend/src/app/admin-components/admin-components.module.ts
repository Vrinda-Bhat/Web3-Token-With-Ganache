import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { IssuePointsComponent } from './issue-points/issue-points.component';
import { PointsInCirculationComponent } from './points-in-circulation/points-in-circulation.component';




@NgModule({
  declarations: [
    DashboardComponent,

    IssuePointsComponent,
      PointsInCirculationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [IssuePointsComponent,
     ]
})
export class AdminComponentsModule { }
