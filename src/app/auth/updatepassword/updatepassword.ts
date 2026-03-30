import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Resetpassword } from '../../services/resetpassword';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-updatepassword',
  standalone: true,
  imports: [FormsModule, MatIcon],
  templateUrl: './updatepassword.html',
  styleUrl: './updatepassword.css',
})
export class Updatepassword implements OnInit {
  step: number = 1;
  email!: string;
  confirmCode!: string;
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private route: ActivatedRoute, private resetPassword: Resetpassword) { }

  ngOnInit(): void { }
  sendCode() {
    this.resetPassword.sendCode(this.email).subscribe({
      next: () => {
        alert('Code envoyé à votre email');
        this.step = 2;
      },
      error: (error) => {
        alert('Erreur envoi code');
        console.error(error);
      }
    });
  }
  updatePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    const request = {
      email: this.email,
      confirmCode: this.confirmCode,
      newPassword: this.newPassword
    };
    this.resetPassword.updatePassword(request).subscribe({
      next: (res) => {
        if (res === true) {
          alert("Mot de passe modifié");
          this.step = 1;
        } else {
          alert("Code incorrect");
        }
      },
      error: (err) => {
        console.error(err);
        alert("Erreur serveur");
      }
    });
  }
  login() {
    window.location.href = '/login';
  }
}