import { Component } from '@angular/core';
import { CreateUserDto } from '../../user';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentification';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
userData: CreateUserDto = {
    email: '',
    nom: '',
    prenom: '',
    tel: '',
    dateN: new Date(),
    genre: '',
    password: '',
    role: 'ETUDIANT',
    departement: ''
  };

  constructor( private router: Router,private authService: AuthService) {}

  signup() {
    this.authService.signup(this.userData).subscribe({
      next: (res) => {
        alert('Inscription réussie !');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
        alert('Erreur lors de l\'inscription !');
      }
    });
  }
}

