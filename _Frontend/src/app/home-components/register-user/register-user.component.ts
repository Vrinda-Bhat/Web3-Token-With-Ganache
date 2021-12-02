import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserRegisterService } from 'src/app/services/user-register.service';
import { User } from 'src/app/shared-resources/models/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  Uemail: string;
  Upass: string;
  Uusername: string;
  ULogin: User;
  //acc1:LoginCredential ={email:'user1',password:'root1'};
  //acc2:LoginCredential ={email:'user2',password:'root2'};

  constructor(private router: Router,private cookie:CookieService, private userRService:UserRegisterService) { }
  ngOnInit():void { 
}
   
  onRegister(){
    if(!this.Uemail){
      alert('Please enter Email ID !');
      return;
    }
    else if(!this.Upass){
      alert('Please enter password!');
      return;
    }
    //Service to check user credentials
     this.ULogin = {
      email: this.Uemail,
      password: this.Upass,
      username: this.Uusername
    }
    
    this.userRService.userRegister(this.ULogin).subscribe({
      next: data =>{ 
                      if(data.walletId)
                      {
                        alert("Registration successful!");
                        this.router.navigate(['/loginUser']).then(() => {
                          window. location. reload();
                          });

                      }
                      else
                      {
                          alert(data.console.error());             
                      }


                  },
      error: error => {
        console.error('There was an error in User Login http service! :', error.message);
      }
    });
  }
}
