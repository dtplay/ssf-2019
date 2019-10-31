import { Injectable } from "@angular/core";
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate, CanActivateChild {

  private authenticated = false;

  constructor(private router: Router) { }

  authenticate(username: string, paassword: string) {
    this.authenticated = true;
    console.info('authenticated')
  }

  isLogin() {
    return (this.authenticated);
  }

  canActivate(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
      return (this.authenticated);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
      if (!this.authenticated)
        this.router.navigate(['/login']);
      return (this.authenticated);
    }

}
