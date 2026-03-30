import { Component } from '@angular/core';
import { UserService } from '../../../services/user';
import { CreateUserDto } from '../../../user';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/authentification';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-adduser',
  imports: [RouterLink, FormsModule,MatIcon],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  departements: string[] = [
    'Informatique',
    'Réseaux',
    'Sécurité Informatique',
    'Développement',
    'Finance',
    'Ressources Humaines'
  ];
  user: CreateUserDto = {} as CreateUserDto;
  constructor(private userService: UserService, private router: Router, private AuthService: AuthService) { }
 
  addUser(dto: CreateUserDto): void {
    if (this.isAgent()) {
      dto.role = 'EMPLOYE';
    }
    this.userService.createUser(dto).subscribe({
      next: (data) => {
        console.log('User added successfully:', data);
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
  }
  isAdmin(): boolean {
    return this.AuthService.isAdmin();
  }
  isAgent(): boolean {
    return this.AuthService.isAgent();
  }
  
}
