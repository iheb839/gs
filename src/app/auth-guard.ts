import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './services/authentification';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard {
  constructor(private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRoles = route.data['roles'];
    const userRole = this.authService.getUserRole();
    return expectedRoles.includes(userRole);
  }
}
