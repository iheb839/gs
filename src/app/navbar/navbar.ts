import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/authentification';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterLink, MatIconModule, MatDialogModule],
})
export class NavbarComponent {
  readonly dialog = inject(MatDialog);
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  isLoggedInUser(): boolean {
    return this.authService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  isAgent(): boolean {
    return this.authService.isAgent();
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
