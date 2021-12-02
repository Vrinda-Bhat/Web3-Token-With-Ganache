import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginService } from 'src/app/services/user-login.service';
import { LoginCredential } from 'src/app/shared-resources/models/loginCredential';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  Uemail: string;
  Upass: string;
  Ulogin: LoginCredential;
  //acc1:LoginCredential ={email:'user1',password:'root1'};
  //acc2:LoginCredential ={email:'user2',password:'root2'};

  constructor(private router: Router,private cookie:CookieService, private userService:UserLoginService) { }
  ngOnInit():void { 
}
   
  onLogin(){
    if(!this.Uemail){
      alert('Please enter Email ID !');
      return;
    }
    //Service to check user credentials
     this.Ulogin = {
      email: this.Uemail,
      password: this.Upass
    }
    
    this.userService.userLogin(this.Ulogin).subscribe({
      next: data =>{ 

                      if(this.cookie.check("WalletId"))
                      {
                        
                        this.router.navigate(['/userDashboard']).then(() => {
                          window. location. reload();
                          });
                      }
                      else{
                        alert(data.errorMessage);

                      }
                  },
      error: error => {
        console.error('There was an error in User Login http service! :', error.message);
      }
    });

    // if(this.Ulogin.email == this.acc1.email && this.Ulogin.password == this.acc1.password){
    //   this.cookie.set('user',environment.acc1Id);
    //   this.router.navigate(['/userDashboard']).then(() => {
    //     window. location. reload();
    //     });
    // }
    // else if(this.Ulogin.email == this.acc2.email && this.Ulogin.password == this.acc2.password){
    //   this.cookie.set('user',environment.acc2Id);
    //   this.router.navigate(['/userDashboard']).then(() => {
    //     window. location. reload();
    //     });
      
    // }
    // else{
    //   alert("Email or Password is Incorrect !!!");
    // }
    
    // this.loginService.checkCredentials(this.login).subscribe({
    //   next: data =>{  if(this.cookies.check('Token')){
                        
    //                   this.router.navigate(['/dashboard']).then(() => {
    //                     window. location. reload();
    //                     });;

    //                   }   
    //                   else{
    //                     console.log(data);
    //                   }
    //               },
    //   error: error => {
    //     console.error('There was an error in Login http service! :', error.message);
    //   }
    // });  
  
  }  
}
