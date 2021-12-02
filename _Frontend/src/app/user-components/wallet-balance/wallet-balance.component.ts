import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CheckBalanceService } from 'src/app/services/check-balance.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent implements OnInit {
  walletId: string;
  balance: number;
  constructor(private cookie:CookieService,private checkBal:CheckBalanceService) { }

  
  ngOnInit(): void {
    this.walletId= this.cookie.get('WalletId');
    //Call Service Fetch to balance
    this.checkBal.walletBalance(this.walletId).subscribe({
      next: data =>{  this.balance = data.amount;
                  },
      error: error => {
        console.error('There was an error in Check Balance http service! :', error.message);
      }
    });

  }
}
