import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/authentification';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Profile } from '../profile/profile';


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


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToProfile() {
   const result = this.dialog.open(Profile, {
       width: '600px',
      closeOnNavigation: true,
    });
    result.afterClosed().subscribe((closed) => {
      if (closed) {
        this.router.navigate(['/documents']);
      }
    });
  }
}
