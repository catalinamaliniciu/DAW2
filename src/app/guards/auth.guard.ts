import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // provides the route configuration options.
      const { routeConfig } = route; 
      
      // provides the path of the route.
      const { path } = routeConfig as Route; 
      if (path?.includes('about') || path?.includes('contact')) {
      // if user is customer and is accessing customer route, allow access.
    
        return true;
      }
      this.router.navigateByUrl('/forbidden'); 
      return false;
  }
  
}
