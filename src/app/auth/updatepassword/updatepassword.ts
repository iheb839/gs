import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/authentification';
import { FormsModule } from '@angular/forms';
import { UpdatePasswordDto } from '../../user';
@Component({
  selector: 'app-updatepassword',
  imports: [FormsModule],
  templateUrl: './updatepassword.html',
  styleUrl: './updatepassword.css',
})
export class Updatepassword implements OnInit {
  email!: string;
  oldPassword: string = '';
  newPassword: string = '';
  constructor(private route: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {
    const routeEmail = this.route.snapshot.paramMap.get('email');
    if (routeEmail) this.email = routeEmail;

  }
  updatePassword() {
    const dto: UpdatePasswordDto = {
      email: this.email,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    };
    this.authService.updatePassword(dto).subscribe({
      next: () => {
        console.log('Password updated successfully');
      },
      error: (err) => {
        console.error('Error updating password:', err);
      }
    });
  }
}