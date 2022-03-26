import { AuthService } from './../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountGuard implements CanActivate {

    constructor(private AuthService: AuthService, 
    private router: Router) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        if (this.AuthService.getCurrentAuthState()) {
          return true;
        } else {
          this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}).then();
          return;
        }
    
      }
      canRegistration(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        if (this.AuthService.getCurrentAuthState()) {
          return true;
        } else {
          this.router.navigate(['/registration'], {queryParams: {returnUrl: state.url}}).then();
          return;
        }
    
      }
}

