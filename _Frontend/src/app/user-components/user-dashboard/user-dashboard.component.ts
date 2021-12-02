import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

  onBalanceCheck(){
    this.router.navigate(['/walletBalance']);
  }
  onTransferPoints(){
    this.router.navigate(['/transferPoints']);
  }
}
