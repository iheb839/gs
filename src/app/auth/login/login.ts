import { Component, inject, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/authentification';
import { ToastrService } from 'ngx-toastr';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, MatIcon],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';
  toastrService: ToastrService = inject(ToastrService);

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveUserData(response);
        this.toastrService.success('Login successful!', 'Success');
        const userRole = this.authService.getUserRole();
        if (userRole === 'ADMIN') {
          this.router.navigate(['/admin']);
        }
        
      },
      error: () => {
        this.toastrService.error('Invalid email or password', 'Login Failed');
      }
    });
  }
}

