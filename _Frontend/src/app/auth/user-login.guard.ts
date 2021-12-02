import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  constructor( private cookies: CookieService ,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( this.cookies.check('WalletId')) {
        return true;
      }
      else {
        console.log('User not logged in');
        this.router.navigate(['/loginUser']);
        return false;
      }
  }
  
}
