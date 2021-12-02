import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/home-components/login/login.component';
import { LogoutService } from 'src/app/services/logout.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isUserLoggedIn = false;
  constructor(private cookies: CookieService, private logoutservice: LogoutService) { }
  
  ngOnInit(): void {   
    this.isLoggedIn = this.cookies.check('AdminWalletId');
    this.isUserLoggedIn = this.cookies.check('WalletId')
  }

  logout():void{
    //this.cookies.deleteAll();
    this.logoutservice.logout().subscribe({
      next: data =>{  
                      if(data.msg)
                      {
                        window.location.reload();
                      }
                  },
      error: error => {
        console.error('There was an error in Logout http service! :', error.message);
      }
    });
   


  }

 

}
