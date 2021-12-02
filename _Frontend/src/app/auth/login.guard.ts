import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor( private cookies: CookieService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cookies.get('AdminWalletId') == environment.ownerId) {
        return true;
      }
      else {
        console.log('Admin not logged in');
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
