import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CheckBalanceService } from 'src/app/services/check-balance.service';
import { TransferPointsService } from 'src/app/services/transfer-points.service';

@Component({
  selector: 'app-transfer-points',
  templateUrl: './transfer-points.component.html',
  styleUrls: ['./transfer-points.component.css']
})
export class TransferPointsComponent implements OnInit {
  fromWalletId: string;
  toWalletId: string;
  points: number;
  msg: string;
  constructor(private cookie:CookieService,private router: Router,private transferpt: TransferPointsService,private checkBal:CheckBalanceService) { }

  ngOnInit(): void {
    this.fromWalletId= this.cookie.get('WalletId')
  }
  
  transferPoints(){
    //Call service to transfer points
    // console.log(this.points)
    // console.log(this.toWalletId);
    this.checkBal.walletBalance(this.fromWalletId).subscribe({
      next: data =>{  if(parseInt(data.amount,10) < this.points){
                      alert("Insufficient Balance !!!");
                      }
                      else{
                        this.transferpt.transferPoints(this.fromWalletId,this.toWalletId,this.points).subscribe({
                          next: data =>{ this.msg = data.msg;
                                      alert(this.msg);
                                      this.router.navigate(['/userDashboard'])
                                      },
                          error: error => {
                            console.error('There was an error in transfer http service! :', error.message);
                          }
                        });

                      }
                  },
      error: error => {
        console.error('There was an error in Check Balance http service! :', error.message);
      }
    });

    
    
  
  }
}
