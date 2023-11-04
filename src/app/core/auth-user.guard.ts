import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {
  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if(this.userService.getRole() !== "ANONYMOUS"){
      return true;
    }else{
      this.router.navigate(['home']);
      return false;
    }
  }

}
