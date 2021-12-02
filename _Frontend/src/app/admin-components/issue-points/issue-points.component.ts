import { Component, OnInit } from '@angular/core';
import { IssuePointsService } from 'src/app/services/issue-points.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-issue-points',
  templateUrl: './issue-points.component.html',
  styleUrls: ['./issue-points.component.css']
})
export class IssuePointsComponent implements OnInit {
  walletId: string;
  points: number;
  msg: string;
  constructor(private issuePt:IssuePointsService) { }

  ngOnInit(): void {
  }
  issuePoints(){
    // service to mint points to the flyer wallet
    // console.log(this.walletId);
    // console.log(this.points);
    // console.log(environment.ownerId)
    this.issuePt.issuePoint(this.walletId,this.points).subscribe({
      next: data =>{
        this.msg= data.msg;   
      },
      error:error => {
        console.error('There was an error in Point issue http service! :', error.message);
      }
    });
  }


}
