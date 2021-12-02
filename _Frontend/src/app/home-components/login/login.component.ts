import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { LoginCredential } from 'src/app/shared-resources/models/loginCredential';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 


  email: string;
  pass: string;
  login: LoginCredential;
  

  constructor(private cookies: CookieService,
              private router: Router, private adminService:AdminLoginService) { }
  ngOnInit():void { 
}
   
  onLogin(){
    if(!this.email){
      alert('Please enter Email ID !');
      return;
    }
    //Service to check user credentials
     this.login = {
      email: this.email,
      password: this.pass
    }

    this.adminService.adminLogin(this.login).subscribe({
      next: data =>{ 

                      if(this.cookies.check("AdminWalletId"))
                      {
                        this.router.navigate(['/dashboard']).then(() => {
                          window. location. reload();
                          });
                      }
                      else{
                        alert(data.errorMessage);

                      }
                  },
      error: error => {
        console.error('There was an error in Admin Login http service! :', error.message);
      }
    });


    // if(this.login.email=='ashwin@gmail.com'){
    //   this.login.password=='root' ?this.cookies.set('owner',environment.ownerId):alert("Invalid Password");
    //   if(this.cookies.get('owner')){
    //     this.router.navigate(['/dashboard']).then(() => {
    //                            window. location. reload();
    //                            });
    //   }
    // }
    // else{
    //   alert("Email not found !!!");
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
