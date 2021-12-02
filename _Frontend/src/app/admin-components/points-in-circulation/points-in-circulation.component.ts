import { Component, OnInit } from '@angular/core';
import { TotalSupplyService } from 'src/app/services/total-supply.service';

@Component({
  selector: 'app-points-in-circulation',
  templateUrl: './points-in-circulation.component.html',
  styleUrls: ['./points-in-circulation.component.css']
})
export class PointsInCirculationComponent implements OnInit {
  totalSupply: string;
  constructor(private totsupply:TotalSupplyService) { }

  ngOnInit(): void {
    //Service to call total points in circulation
    this.totsupply.checkTotalSupply().subscribe({
        next: data =>{  this.totalSupply = data.amount;
                    },
        error: error => {
          console.error('There was an error in TotalSupply http service! :', error.message);
        }
      });
    //this.totalSupply=5000;

  }

}
