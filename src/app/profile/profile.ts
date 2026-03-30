import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentification';
import { User } from '../user';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Resetpassword } from '../services/resetpassword';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIconModule, FormsModule, CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {

  user?: User;
  mode: 'view' | 'edit' | 'password' = 'view';
  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(private userService: UserService, private authService: AuthService, private router: Router, public dialogRef: MatDialogRef<Profile>,
    private resetpassword: Resetpassword
  ) { }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('USER_INFO');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
    }

    if (this.user?.dateN) {
      this.user.dateN = (this.user.dateN as any).toString().substring(0, 10);
    }
  }

  closeModal() {
    this.dialogRef.close(true);
  }
  enableEdit() {
    this.mode = 'edit';
  }

  cancelEdit() {
    this.mode = 'view';
  }
  togglePasswordForm() {
    this.mode = 'password';
  }
  backToProfile() {
    this.mode = 'view';
  }
  updateProfile() {
    const oldUser = this.user;
    this.userService.updateUser(this.user!.id, this.user!).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.mode = 'view';
        localStorage.setItem('USER_INFO', JSON.stringify(updatedUser));
        const token = this.authService.getToken();
        if (token) localStorage.setItem('TOKEN', token);
      },
      error: (err) => {
        console.error(err);
        this.user = oldUser!;
        this.mode = 'view';
      }
    });
  }
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  changePassword() {
    if (!this.user?.email) return;
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      alert("Confirmation incorrect ");
      return;
    }
    const payload = {
      email: this.user.email,
      oldPassword: this.passwordData.oldPassword,
      newPassword: this.passwordData.newPassword,
      confirmPassword: this.passwordData.confirmPassword
    };
    this.resetpassword.changePassword(payload).subscribe({
      next: () => {
        alert("Mot de passe changé");
        this.mode = 'view';
        this.passwordData = {
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        };
      },
      error: (err) => {
        alert("Erreur lors du changement de mot de passe");
      }
    });
  }
}