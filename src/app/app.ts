import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { User } from './user';
import { UserService } from './services/user';
import { AuthService } from './services/authentification';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart_archive');
  authService: AuthService = inject(AuthService);
  isUserLoggedIn = this.authService.isLoggedIn;
}
