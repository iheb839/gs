import { Component } from '@angular/core';
import { UserService } from '../../../services/user';
import { CreateUserDto } from '../../../user';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  imports: [RouterLink, CommonModule, FormsModule],
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

  constructor(private userService: UserService, private router: Router) { }
  user: CreateUserDto = {} as CreateUserDto;
  addUser(dto: CreateUserDto): void {
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
}
