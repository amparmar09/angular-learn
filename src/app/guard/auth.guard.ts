import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  
    register(user: any): void {
     
      localStorage.setItem('user', JSON.stringify(user));
    }
  
    login(email: string, password: string): boolean {
     
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('loggedIn', 'true');
        return true;
      }
      return false;
    }
  
    isLoggedIn(): boolean {
     return localStorage.getItem('loggedIn') === 'true';
    }
  
    logout(): void {
           localStorage.removeItem('loggedIn');
    }
}
