import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'; 
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

    // for auth status of current user
  canActivate(route, state: RouterStateSnapshot) {
      return this.auth.user$.map(user => {
      if (user) return true;
      
      // queryParams is for navigation extra parameters
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
