// for checking user is admin or not 
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }
  // authguard for admin
  canActivate(): Observable<boolean>{
    return this.auth.appUser$ 
    .pipe(map(appUser => appUser.isAdmin));    }
}
//switchMap will switch between multiple user